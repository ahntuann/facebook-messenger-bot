module.exports = {
  STEP2_DIRECTION1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Moonpie có thể liên hệ với anh chị qua phương thức nào?",

      quick_replies: [
        {
          content_type: "text",
          title: "Số điện thoại",
          payload: "STEP2_DIRECTION1_2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Email",
          payload: "STEP2_DIRECTION1_2_VIETNAMESE",
        },

        {
          content_type: "text",
          title: "Zalo",
          payload: "STEP2_DIRECTION1_2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Telegram",
          payload: "STEP2_DIRECTION1_2_VIETNAMESE",
        },
      ],
    },
  }),

  STEP2_DIRECTION1_2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị vui lòng nhập thông tin liên hệ tại đây để được Moonpie tiếp tục tư vấn",
    },
  }),

  STEP2_DIRECTION2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Moonpie có thể liên hệ với anh chị qua phương thức nào?",

      quick_replies: [
        {
          content_type: "text",
          title: "Số điện thoại",
          payload: "STEP2_DIRECTION2_2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Email",
          payload: "STEP2_DIRECTION2_2_VIETNAMESE",
        },

        {
          content_type: "text",
          title: "Zalo",
          payload: "STEP2_DIRECTION2_2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Telegram",
          payload: "STEP2_DIRECTION2_2_VIETNAMESE",
        },
      ],
    },
  }),

  STEP2_DIRECTION2_2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh chị vui lòng nhập thông tin liên hệ tại đây để được nhân viên CSKH hỗ trợ trực tiếp",
    },
  }),

  STEP2_DIRECTION2_END_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Chúng tôi sẽ liên hệ với anh/chị trong vòng 24h giờ làm việc. Anh/chị vui lòng chú ý điện thoại, Moonpie xin chân thành cảm ơn!",
    },
  }),

  //

  STEP2_DIRECTION1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "How can Moonpie contact you?",

      quick_replies: [
        {
          content_type: "text",
          title: "Phone number",
          payload: "STEP2_DIRECTION1_2_ENGLISH",
        },
        {
          content_type: "text",
          title: "Email",
          payload: "STEP2_DIRECTION1_2_ENGLISH",
        },

        {
          content_type: "text",
          title: "Zalo",
          payload: "STEP2_DIRECTION1_2_ENGLISH",
        },
        {
          content_type: "text",
          title: "Telegram",
          payload: "STEP2_DIRECTION1_2_ENGLISH",
        },
      ],
    },
  }),

  STEP2_DIRECTION1_2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Please enter your contact information here so Moonpie can continue supporting you.",
    },
  }),

  STEP2_DIRECTION2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "How can Moonpie contact you?",

      quick_replies: [
        {
          content_type: "text",
          title: "Phone number",
          payload: "STEP2_DIRECTION2_2_ENGLISH",
        },
        {
          content_type: "text",
          title: "Email",
          payload: "STEP2_DIRECTION2_2_ENGLISH",
        },

        {
          content_type: "text",
          title: "Zalo",
          payload: "STEP2_DIRECTION2_2_ENGLISH",
        },
        {
          content_type: "text",
          title: "Telegram",
          payload: "STEP2_DIRECTION2_2_ENGLISH",
        },
      ],
    },
  }),

  STEP2_DIRECTION2_2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Please enter your contact information here to get direct support from our customer service team.",
    },
  }),

  STEP2_DIRECTION2_END_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "We will contact you within 24 business hours. Kindly keep an eye on your phone. Moonpie sincerely thanks you!",
    },
  }),
};
