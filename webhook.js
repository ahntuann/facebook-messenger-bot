require("dotenv").config();
const express = require("express");
const router = express.Router();
const handlePostback = require("./handlers/handlePostback");
const handleMessage = require("./handlers/handleMessage");
const userFlowManager = require("./handlers/userFlowManager");

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

router.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

router.post("/webhook", async (req, res) => {
  const body = req.body;

  if (body.object === "page") {
    for (const entry of body.entry) {
      const event = entry.messaging[0];

      // 1. Xử lý ECHO (Admin nhắn tin hoặc Bot tự nhắn)
      if (event.message && event.message.is_echo) {
        // Ép cả 2 về String để so sánh cho chuẩn xác
        const receivedAppId = String(event.message.app_id || "");
        const myAppId = String(process.env.FB_APP_ID || "");

        // Nếu App ID gửi về KHÁC với ID con Bot này (hoặc không có ID)
        // => Nghĩa là Admin đang nhắn từ Business Suite/Page Manager
        if (receivedAppId !== myAppId) {
          const customerPsid = event.recipient.id;
          console.log(
            `[Takeover] Admin đã nhắn cho khách ${customerPsid}. Bot tắt.`,
          );
          await userFlowManager.markHumanTakeover(customerPsid);
        }
        continue; // Dừng xử lý echo, không cho chạy xuống logic khách nhắn
      }

      // Đối với tin nhắn bình thường từ khách, sender.id mới là PSID
      const senderPsid = event.sender.id;
      const userStatus = await userFlowManager.getUserStatus(senderPsid);
      const currentStep = await userFlowManager.getStep(senderPsid);

      // 2. Kiểm tra nếu admin đã can thiệp -> Bot im lặng hoàn toàn
      if (userStatus.is_human_takeover) {
        console.log(
          `[Ignore] Admin đang can thiệp với ${senderPsid}, bot im lặng.`,
        );
        continue;
      }

      // 3. Logic xử lý Từ khóa thoát hiểm & Chặn im lặng
      const messageText = event.message
        ? (event.message.text || "").toLowerCase().trim()
        : "";
      const isGetStarted =
        event.postback && event.postback.payload === "GET_STARTED_PAYLOAD";
      const isEscapeWord = ["menu", "bắt đầu", "start", "reset"].includes(
        messageText,
      );

      // Chỉ chặn nếu (Đã kết thúc kịch bản) VÀ KHÔNG PHẢI Bắt đầu/Escape
      if (currentStep === "FINISHED" && !isGetStarted && !isEscapeWord) {
        console.log(
          `[Silence] User ${senderPsid} đã xong kịch bản, không trả lời thêm.`,
        );
        continue;
      }

      // Đánh dấu bắt đầu tương tác
      await userFlowManager.markInteracted(senderPsid);

      if (event.message) {
        if (event.message.quick_reply) {
          await handlePostback(senderPsid, {
            payload: event.message.quick_reply.payload,
          });
        } else {
          await handleMessage(senderPsid, event.message.text || "attachment");
        }
      } else if (event.postback) {
        await handlePostback(senderPsid, event.postback);
      }
    }
    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
