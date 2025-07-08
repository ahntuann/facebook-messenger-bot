module.exports = {
  STEP10_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị đã từng làm email marketing chưa?",

      quick_replies: [
        {
          content_type: "text",
          title: "Đã có kinh nghiệm",
          payload: "STEP10_DIRECTION1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Chưa từng",
          payload: "STEP10_DIRECTION2_VIETNAMESE",
        },
      ],
    },
  }),

  STEP10_DIRECTION1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh chị làm email marketing trên nền tảng nào?",

      quick_replies: [
        {
          content_type: "text",
          title: "Klaviyo",
          payload: "STEP10_DIRECTION1_1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Khác",
          payload: "STEP10_DIRECTION1_2_VIETNAMESE",
        },
      ],
    },
  }),
  STEP10_DIRECTION1_1_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Moonpie tự hào khi là partner hạng Vàng đầu tiên của Klaviyo tại Việt Nam. Với nhiều năm đồng hành cùng Klaviyo, chúng tôi đã hỗ trợ rất nhiều doanh nghiệp đạt được hiệu quả kinh doanh." +
          "\nMoonpie rất hân hạnh hỗ trợ anh/chị chi tiết hơn về tình hình của doanh nghiệp mình ạ",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP10_DIRECTION1_2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Vui lòng nhập tên nền tảng",
    },
  }),

  STEP10_DIRECTION2_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Nếu anh/chị tìm một kênh marketing hiệu quả và tiết kiệm, Email Marketing là lựa chọn lý tưởng." +
          "\nLà đối tác hạng Vàng đầu tiên của Klaviyo tại Việt Nam, Moonpie cam kết tối ưu, đo lường từng email để xây dựng quan hệ lâu dài và tăng giá trị vòng đời khách hàng.",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1500);
  },

  //

  STEP10_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Have you ever done or are currently doing email marketing?",

      quick_replies: [
        {
          content_type: "text",
          title: "Have experience ",
          payload: "STEP10_DIRECTION1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Not yet",
          payload: "STEP10_DIRECTION2_ENGLISH",
        },
      ],
    },
  }),

  STEP10_DIRECTION1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Which platform are you using for email marketing?",

      quick_replies: [
        {
          content_type: "text",
          title: "Klaviyo",
          payload: "STEP10_DIRECTION1_1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Others",
          payload: "STEP10_DIRECTION1_2_ENGLISH",
        },
      ],
    },
  }),
  STEP10_DIRECTION1_1_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Moonpie is proud to be the first official Gold Partner of Klaviyo in Vietnam. With years of experience working alongside Klaviyo, we’ve helped many businesses achieve effective growth through email marketing." +
          "\nMoonpie would love to hear more about your business and goals so we can support you better.",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP10_DIRECTION1_2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Please enter platform name",
    },
  }),

  STEP10_DIRECTION2_ENGLISH: async (senderPsid, callSendAPI, nextStepFunc) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "If you are looking for an effective and cost-effective marketing channel, Email Marketing is the ideal choice." +
          "\n\nAs the first Gold partner of Klaviyo in Vietnam, Moonpie is committed to optimizing and measuring each email to build long-term relationships and increase customer lifetime value.",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1500);
  },
};
