module.exports = {
  STEP5_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Khách hàng của anh/chị tập trung ở thị trường?",

      quick_replies: [
        {
          content_type: "text",
          title: "Hoa Kỳ",
          payload: "STEP6_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Châu Âu",
          payload: "STEP6_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Đông Nam Á",
          payload: "STEP6_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Khác",
          payload: "STEP6_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP5_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Where do your customers focus?",

      quick_replies: [
        {
          content_type: "text",
          title: "United States",
          payload: "STEP6_ENGLISH",
        },
        {
          content_type: "text",
          title: "Europe",
          payload: "STEP6_ENGLISH",
        },
        {
          content_type: "text",
          title: "Southeast Asia",
          payload: "STEP6_ENGLISH",
        },
        {
          content_type: "text",
          title: "Other",
          payload: "STEP6_ENGLISH",
        },
      ],
    },
  }),
};
