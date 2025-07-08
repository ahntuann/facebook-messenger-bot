module.exports = {
  STEP4_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị đang kinh doanh theo mấy ngách (niche)?",

      quick_replies: [
        {
          content_type: "text",
          title: "1 ngách chính",
          payload: "STEP5_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Nhiều ngách",
          payload: "STEP5_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP4_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "How many niches are you targeting?",

      quick_replies: [
        {
          content_type: "text",
          title: "Main niche only",
          payload: "STEP5_ENGLISH",
        },
        {
          content_type: "text",
          title: "Multi-niche",
          payload: "STEP5_ENGLISH",
        },
      ],
    },
  }),
};
