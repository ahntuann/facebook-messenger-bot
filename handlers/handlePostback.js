const callSendAPI = require("./callSendAPI");
const userFlowManager = require("./userFlowManager");

const step1 = require("./steps/step1");
const step2 = require("./steps/step2");
const step4 = require("./steps/step4");
const step5 = require("./steps/step5");
const step6 = require("./steps/step6");
const step7 = require("./steps/step7");
const step8 = require("./steps/step8");
const step9 = require("./steps/step9");
const endChat = require("./steps/endChat");
const step10 = require("./steps/step10");
const step11 = require("./steps/step11");
const step13 = require("./steps/step13");
const step14 = require("./steps/step14");

module.exports = async function handlePostback(senderPsid, postback) {
  const payload = postback.payload;
  console.log("📦 Postback received:", payload);

  let response;

  if (payload === "GET_STARTED_PAYLOAD") {
    response = {
      recipient: { id: senderPsid },
      message: {
        text: "Bắt đầu cuộc trò chuyện với Moonpie Global",
        quick_replies: [
          {
            content_type: "text",
            title: "Bắt đầu / Start now",
            payload: "STEP1",
          },
        ],
      },
    };
  } else if (step1[payload]) {
    response = step1[payload](senderPsid);
  } else if (step2[payload]) {
    if (
      payload === "STEP2_DIRECTION2_2_VIETNAMESE" ||
      payload === "STEP2_DIRECTION1_2_VIETNAMESE" ||
      payload === "STEP2_DIRECTION2_2_ENGLISH" ||
      payload === "STEP2_DIRECTION1_2_ENGLISH"
    ) {
      userFlowManager.setStep(senderPsid, payload);
    }

    response = step2[payload](senderPsid);
  } else if (step4[payload]) {
    response = step4[payload](senderPsid);
  } else if (step5[payload]) {
    response = step5[payload](senderPsid);
  } else if (step6[payload]) {
    response = step6[payload](senderPsid);
  } else if (step7[payload]) {
    if (payload === "STEP7_INTRODUCE_VIETNAMESE") {
      response = step8["STEP8_VIETNAMESE"](senderPsid);

      const responseTextStep7Introduce =
        step7["STEP7_INTRODUCE_VIETNAMESE"](senderPsid).message.text;

      response.message.text =
        responseTextStep7Introduce + "\n\n" + response.message.text;
    } else if (payload === "STEP7_INTRODUCE_ENGLISH") {
      response = step8["STEP8_ENGLISH"](senderPsid);

      const responseTextStep7Introduce =
        step7["STEP7_INTRODUCE_ENGLISH"](senderPsid).message.text;

      response.message.text =
        responseTextStep7Introduce + "\n\n" + response.message.text;
    } else {
      response = step7[payload](senderPsid);
    }
  } else if (step8[payload]) {
    response = step8[payload](senderPsid);
  } else if (step9[payload]) {
    response = step9[payload](senderPsid);
  } else if (step10[payload]) {
    if (payload === "STEP10_DIRECTION1_1_VIETNAMESE") {
      step10.STEP10_DIRECTION1_1_VIETNAMESE(senderPsid, callSendAPI, () => {
        callSendAPI(step11["STEP11_VIETNAMESE"](senderPsid));
        userFlowManager.setStep(senderPsid, "STEP12_VIETNAMESE");
      });

      return;
    } else if (payload === "STEP10_DIRECTION1_1_ENGLISH") {
      step10.STEP10_DIRECTION1_1_ENGLISH(senderPsid, callSendAPI, () => {
        callSendAPI(step11["STEP11_ENGLISH"](senderPsid));
        userFlowManager.setStep(senderPsid, "STEP12_ENGLISH");
      });

      return;
    }

    if (payload === "STEP10_DIRECTION2_VIETNAMESE") {
      step10.STEP10_DIRECTION2_VIETNAMESE(senderPsid, callSendAPI, () => {
        callSendAPI(step11["STEP11_VIETNAMESE"](senderPsid));
        userFlowManager.setStep(senderPsid, "STEP12_VIETNAMESE");
      });

      return;
    } else if (payload === "STEP10_DIRECTION2_ENGLISH") {
      step10.STEP10_DIRECTION2_ENGLISH(senderPsid, callSendAPI, () => {
        callSendAPI(step11["STEP11_ENGLISH"](senderPsid));
        userFlowManager.setStep(senderPsid, "STEP12_ENGLISH");
      });

      return;
    }

    if (
      payload === "STEP10_DIRECTION1_2_VIETNAMESE" ||
      payload === "STEP10_DIRECTION1_2_ENGLISH"
    ) {
      userFlowManager.setStep(senderPsid, payload);
    }

    response = step10[payload](senderPsid);
  } else if (step13[payload]) {
    if (
      payload === "STEP13_DIRECTION1_2_VIETNAMESE" ||
      payload === "STEP13_DIRECTION1_2_ENGLISH"
    ) {
      userFlowManager.setStep(senderPsid, payload);
    }

    response = step13[payload](senderPsid);
  } else if (step14[payload]) {
    if (
      payload === "STEP14_DIRECTION1_1_VIETNAMESE" ||
      payload === "STEP14_DIRECTION1_2_VIETNAMESE" ||
      payload === "STEP14_DIRECTION1_3_VIETNAMESE" ||
      payload === "STEP14_DIRECTION1_4_VIETNAMESE"
    ) {
      step14[payload](senderPsid, callSendAPI, () => {
        callSendAPI(step14["STEP14_DIRECTION1_X_1_VIETNAMESE"](senderPsid));
      });

      return;
    } else if (
      payload === "STEP14_DIRECTION1_1_ENGLISH" ||
      payload === "STEP14_DIRECTION1_2_ENGLISH" ||
      payload === "STEP14_DIRECTION1_3_ENGLISH" ||
      payload === "STEP14_DIRECTION1_4_ENGLISH"
    ) {
      step14[payload](senderPsid, callSendAPI, () => {
        callSendAPI(step14["STEP14_DIRECTION1_X_1_ENGLISH"](senderPsid));
      });

      return;
    } else if (
      payload === "STEP14_DIRECTION3_1_VIETNAMESE" ||
      payload === "STEP14_DIRECTION3_2_VIETNAMESE" ||
      payload === "STEP14_DIRECTION3_3_VIETNAMESE"
    ) {
      step14[payload](
        senderPsid,
        callSendAPI,
        () => {
          callSendAPI(step14["STEP14_DIRECTION3_X_1_VIETNAMESE"](senderPsid));
        },
        () => {
          callSendAPI(step14["STEP14_DIRECTION3_X_2_VIETNAMESE"](senderPsid));
        },
        () => {
          callSendAPI(step14["STEP14_DIRECTION3_X_3_VIETNAMESE"](senderPsid));
        }
      );

      return;
    } else if (
      payload === "STEP14_DIRECTION3_1_ENGLISH" ||
      payload === "STEP14_DIRECTION3_2_ENGLISH" ||
      payload === "STEP14_DIRECTION3_3_ENGLISH"
    ) {
      step14[payload](
        senderPsid,
        callSendAPI,
        () => {
          callSendAPI(step14["STEP14_DIRECTION3_X_1_ENGLISH"](senderPsid));
        },
        () => {
          callSendAPI(step14["STEP14_DIRECTION3_X_2_ENGLISH"](senderPsid));
        },
        () => {
          callSendAPI(step14["STEP14_DIRECTION3_X_3_ENGLISH"](senderPsid));
        }
      );

      return;
    } else if (
      payload === "STEP14_DIRECTION2_VIETNAMESE" ||
      payload === "STEP14_DIRECTION2_MORE_VIETNAMESE" ||
      payload === "STEP14_DIRECTION2_ENGLISH" ||
      payload === "STEP14_DIRECTION2_MORE_ENGLISH"
    ) {
      userFlowManager.setStep(senderPsid, payload);
    }

    response = step14[payload](senderPsid);
  } else if (endChat[payload]) {
    response = endChat[payload](senderPsid);
  } else {
    response = {
      recipient: { id: senderPsid },
      message: { text: "Xin lỗi, mình chưa hiểu yêu cầu của bạn 😢" },
    };
  }

  callSendAPI(response);
};
