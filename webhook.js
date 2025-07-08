require("dotenv").config();

const express = require("express");
const router = express.Router();

const handlePostback = require("./handlers/handlePostback");
const handleMessage = require("./handlers/handleMessage");

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

// GET: Facebook webhook verification
router.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("WEBHOOK_VERIFIED");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Nhận sự kiện từ Facebook
router.post("/webhook", async (req, res) => {
  const body = req.body;

  if (body.object === "page") {
    for (const entry of body.entry) {
      const event = entry.messaging[0];
      const senderPsid = event.sender.id;

      if (event.message) {
        if (event.message.quick_reply) {
          await handlePostback(senderPsid, {
            payload: event.message.quick_reply.payload,
          });
        } else if (event.message.text) {
          await handleMessage(senderPsid, event.message.text);
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
