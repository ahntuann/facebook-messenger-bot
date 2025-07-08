const handlePostback = require("./handlePostback");
const callSendAPI = require("./callSendAPI");
const userFlowManager = require("./userFlowManager");

const step2 = require("./steps/step2");
const step3 = require("./steps/step3");
const step11 = require("./steps/step11");
const step12 = require("./steps/step12");
const step13 = require("./steps/step13");
const step14 = require("./steps/step14");

async function handleMessage(senderPsid, messageText) {
  const currentStep = userFlowManager.getStep(senderPsid);

  if (!currentStep) {
    await handlePostback(senderPsid, { payload: "GET_STARTED_PAYLOAD" });
    // await handlePostback(senderPsid, { payload: "STEP13_ENGLISH" });
    return;
  }

  userFlowManager.clearStep(senderPsid);

  let response;

  // Xử lý trường hợp bước 2 không có quick reply chỉ nhập
  if (currentStep === "STEP2_DIRECTION1_2_VIETNAMESE") {
    response = step3["STEP3_VIETNAMESE"](senderPsid);
  } else if (currentStep === "STEP2_DIRECTION1_2_ENGLISH") {
    response = step3["STEP3_ENGLISH"](senderPsid);
  } else if (currentStep === "STEP2_DIRECTION2_2_VIETNAMESE") {
    response = step2["STEP2_DIRECTION2_END_VIETNAMESE"](senderPsid);
  } else if (currentStep === "STEP2_DIRECTION2_2_ENGLISH") {
    response = step2["STEP2_DIRECTION2_END_ENGLISH"](senderPsid);
  }

  // Xử lý trường hợp bước 10 nhập tên nền tảng không có quick reply chỉ nhập
  else if (currentStep === "STEP10_DIRECTION1_2_VIETNAMESE") {
    response = step11["STEP11_VIETNAMESE"](senderPsid);
    userFlowManager.setStep(senderPsid, "STEP12_VIETNAMESE");
  } else if (currentStep === "STEP10_DIRECTION1_2_ENGLISH") {
    response = step11["STEP11_ENGLISH"](senderPsid);
    userFlowManager.setStep(senderPsid, "STEP12_ENGLISH");
  }

  //  Xử lý trường hợp bước 12 không nhập gì mà chuyển sang bước 13
  else if (currentStep === "STEP12_VIETNAMESE") {
    step12.STEP12_VIETNAMESE(senderPsid, callSendAPI, () => {
      callSendAPI(step13["STEP13_VIETNAMESE"](senderPsid));
    });

    return;
  } else if (currentStep === "STEP12_ENGLISH") {
    step12.STEP12_ENGLISH(senderPsid, callSendAPI, () => {
      callSendAPI(step13["STEP13_ENGLISH"](senderPsid));
    });

    return;
  }

  // Xử lý trường hợp bước 13 nhánh 1-2 không có quick reply chỉ nhập
  else if (currentStep === "STEP13_DIRECTION1_2_VIETNAMESE") {
    response = step13["STEP13_DIRECTION1_2_1_VIETNAMESE"](senderPsid);
  } else if (currentStep === "STEP13_DIRECTION1_2_ENGLISH") {
    response = step13["STEP13_DIRECTION1_2_1_ENGLISH"](senderPsid);
  }

  // Xử lý trường hợp bước 14 nhánh 2 quá nhiều lựa chọn, cho người dùng nhập số thứ tự flow quan tâm
  else if (
    currentStep === "STEP14_DIRECTION2_VIETNAMESE" ||
    currentStep === "STEP14_DIRECTION2_MORE_VIETNAMESE" ||
    currentStep === "STEP14_DIRECTION2_WRONG_VIETNAMESE"
  ) {
    const stepNumber = messageText.trim();

    const stepKey = `STEP14_DIRECTION2_${stepNumber}_VIETNAMESE`;
    const stepFunc = step14[stepKey];

    if (stepFunc) {
      await stepFunc(senderPsid, callSendAPI, () => {
        const next = step14["STEP14_DIRECTION2_X_1_VIETNAMESE"](senderPsid);
        callSendAPI(next);
      });

      return;
    } else {
      await callSendAPI(
        step14["STEP14_DIRECTION2_WRONG_VIETNAMESE"](senderPsid)
      );
      userFlowManager.setStep(senderPsid, "STEP14_DIRECTION2_WRONG_VIETNAMESE");

      return;
    }
  } else if (
    currentStep === "STEP14_DIRECTION2_ENGLISH" ||
    currentStep === "STEP14_DIRECTION2_MORE_ENGLISH" ||
    currentStep === "STEP14_DIRECTION2_WRONG_ENGLISH"
  ) {
    const stepNumber = messageText.trim();

    const stepKey = `STEP14_DIRECTION2_${stepNumber}_ENGLISH`;
    const stepFunc = step14[stepKey];

    if (stepFunc) {
      await stepFunc(senderPsid, callSendAPI, () => {
        const next = step14["STEP14_DIRECTION2_X_1_ENGLISH"](senderPsid);
        callSendAPI(next);
      });

      return;
    } else {
      await callSendAPI(step14["STEP14_DIRECTION2_WRONG_ENGLISH"](senderPsid));
      userFlowManager.setStep(senderPsid, "STEP14_DIRECTION2_WRONG_ENGLISH");

      return;
    }
  }

  // Xử lý trường hợp không matching case nào
  else {
    response = {
      recipient: { id: senderPsid },
      message: { text: `Bạn vừa gửi: "${messageText}"` },
    };
  }

  await callSendAPI(response);
}

module.exports = handleMessage;
