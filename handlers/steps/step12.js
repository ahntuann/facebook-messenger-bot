module.exports = {
  STEP12_VIETNAMESE: async (senderPsid, callSendAPI, nextStepFunc) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Hiện tại Moonpie đang cung cấp 2 giải pháp Email Marketing, bao gồm: Email Flow và Email Campaign." +
          "\nMoonpie sẽ đưa ra cam kết doanh thu dựa theo tình trạng trafics, ngách, số lượng data... của khách hàng. Sau khi audit store, chúng ta sẽ thảo luận chi tiết về vấn đề này anh/chị nhé!",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },

  //

  STEP12_ENGLISH: async (senderPsid, callSendAPI, nextStepFunc) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text: "Currently, Moonpie offers two Email Marketing solutions: Email Flow and Email Campaign. We commit to revenue outcomes based on your store’s traffic, niche, and data volume. After auditing your store, we’ll discuss these details further with you.",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
};
