const handlePostback = require("./handlePostback");
const callSendAPI = require("./callSendAPI");
const userFlowManager = require("./userFlowManager");

const step2 = require("./steps/step2");
const step3 = require("./steps/step3");
// const step11 = require("./steps/step11");
// const step12 = require("./steps/step12");
// const step13 = require("./steps/step13");
// const step14 = require("./steps/step14");
const endChat = require("./steps/endChat");

async function handleMessage(senderPsid, messageText) {
  const text = messageText.toLowerCase().trim();

  // LOGIC THOÁT HIỂM: Nếu khách muốn quay lại từ đầu
  if (
    text === "menu" ||
    text === "bắt đầu" ||
    text === "start" ||
    text === "reset"
  ) {
    await userFlowManager.clearStep(senderPsid);
    await handlePostback(senderPsid, { payload: "STEP1_2_VIETNAMESE" });
    // await handlePostback(senderPsid, { payload: "STEP7_INTRODUCE_VIETNAMESE" });
    return;
  }

  // Phải có await ở đây
  const currentStep = await userFlowManager.getStep(senderPsid);

  if (!currentStep) {
    // Nếu không có step, bot sẽ im lặng (vì đã lọc ở webhook.js),
    // nhưng nếu có lọt vào đây thì trả về mặc định
    return;
  }

  // Xoá step cũ để chuẩn bị cho trạng thái mới
  await userFlowManager.clearStep(senderPsid);

  let response;

  if (currentStep === "STEP2_DIRECTION1_2_VIETNAMESE") {
    response = step3["STEP3_VIETNAMESE"](senderPsid);
  } else if (currentStep === "STEP2_DIRECTION1_2_ENGLISH") {
    response = step3["STEP3_ENGLISH"](senderPsid);
  } else if (currentStep === "STEP2_DIRECTION2_2_VIETNAMESE") {
    response = step2["STEP2_DIRECTION2_END_VIETNAMESE"](senderPsid);
    await userFlowManager.setStep(senderPsid, "FINISHED");
  } else if (currentStep === "STEP2_DIRECTION2_2_ENGLISH") {
    response = step2["STEP2_DIRECTION2_END_ENGLISH"](senderPsid);
  } else if (currentStep === "STEP10_DIRECTION1_2_VIETNAMESE") {
    response = endChat["END_CHAT_VIETNAMESE"](senderPsid);
    await userFlowManager.setStep(senderPsid, "FINISHED");
  }
  // else if (currentStep === "STEP10_DIRECTION1_2_ENGLISH") {
  //   response = step11["STEP11_ENGLISH"](senderPsid);
  //   await userFlowManager.setStep(senderPsid, "STEP12_ENGLISH"); // Thêm await
  // } else if (currentStep === "STEP12_VIETNAMESE") {
  //   step12.STEP12_VIETNAMESE(senderPsid, callSendAPI, () => {
  //     callSendAPI(step13["STEP13_VIETNAMESE"](senderPsid));
  //   });
  //   return;
  // } else if (currentStep === "STEP12_ENGLISH") {
  //   step12.STEP12_ENGLISH(senderPsid, callSendAPI, () => {
  //     callSendAPI(step13["STEP13_ENGLISH"](senderPsid));
  //   });
  //   return;
  // } else if (currentStep === "STEP13_DIRECTION1_2_VIETNAMESE") {
  //   response = step13["STEP13_DIRECTION1_2_1_VIETNAMESE"](senderPsid);
  // } else if (currentStep === "STEP13_DIRECTION1_2_ENGLISH") {
  //   response = step13["STEP13_DIRECTION1_2_1_ENGLISH"](senderPsid);
  // } else if (
  //   currentStep === "STEP14_DIRECTION2_VIETNAMESE" ||
  //   currentStep === "STEP14_DIRECTION2_MORE_VIETNAMESE" ||
  //   currentStep === "STEP14_DIRECTION2_WRONG_VIETNAMESE"
  // ) {
  //   const stepNumber = messageText.trim();
  //   const stepKey = `STEP14_DIRECTION2_${stepNumber}_VIETNAMESE`;
  //   const stepFunc = step14[stepKey];

  //   if (stepFunc) {
  //     await stepFunc(senderPsid, callSendAPI, () => {
  //       const next = step14["STEP14_DIRECTION2_X_1_VIETNAMESE"](senderPsid);
  //       callSendAPI(next);
  //     });
  //     return;
  //   } else {
  //     await callSendAPI(
  //       step14["STEP14_DIRECTION2_WRONG_VIETNAMESE"](senderPsid),
  //     );
  //     await userFlowManager.setStep(
  //       senderPsid,
  //       "STEP14_DIRECTION2_WRONG_VIETNAMESE",
  //     ); // Thêm await
  //     return;
  //   }
  // } else if (
  //   currentStep === "STEP14_DIRECTION2_ENGLISH" ||
  //   currentStep === "STEP14_DIRECTION2_MORE_ENGLISH" ||
  //   currentStep === "STEP14_DIRECTION2_WRONG_ENGLISH"
  // ) {
  //   const stepNumber = messageText.trim();
  //   const stepKey = `STEP14_DIRECTION2_${stepNumber}_ENGLISH`;
  //   const stepFunc = step14[stepKey];

  //   if (stepFunc) {
  //     await stepFunc(senderPsid, callSendAPI, () => {
  //       const next = step14["STEP14_DIRECTION2_X_1_ENGLISH"](senderPsid);
  //       callSendAPI(next);
  //     });
  //     return;
  //   } else {
  //     await callSendAPI(step14["STEP14_DIRECTION2_WRONG_ENGLISH"](senderPsid));
  //     await userFlowManager.setStep(
  //       senderPsid,
  //       "STEP14_DIRECTION2_WRONG_ENGLISH",
  //     ); // Thêm await
  //     return;
  //   }
  // }
  else {
    // Nếu khách nhắn gì đó không liên quan, không cần rep "Tôi không hiểu"
    // vì đã có cơ chế im lặng ở webhook.js.
    return;
  }

  await callSendAPI(response);
}

module.exports = handleMessage;
