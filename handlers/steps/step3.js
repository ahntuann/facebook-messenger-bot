module.exports = {
  STEP3_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Để Moonpie hiểu rõ doanh nghiệp bên mình, Anh/chị vui lòng cho biết lĩnh vực kinh doanh?",

      quick_replies: [
        {
          content_type: "text",
          title: "Dropshipping",
          payload: "STEP4_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Print on Demand",
          payload: "STEP4_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Private Label",
          payload: "STEP4_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Retailer",
          payload: "STEP4_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Loại hình khác",
          payload: "STEP4_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP3_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "To help Moonpie better understand your business, could you please let us know which industry you’re operating in?",

      quick_replies: [
        {
          content_type: "text",
          title: "Dropshipping",
          payload: "STEP4_ENGLISH",
        },
        {
          content_type: "text",
          title: "Print on Demand",
          payload: "STEP4_ENGLISH",
        },
        {
          content_type: "text",
          title: "Private Label",
          payload: "STEP4_ENGLISH",
        },
        {
          content_type: "text",
          title: "Retailer",
          payload: "STEP4_ENGLISH",
        },
        {
          content_type: "text",
          title: "Other",
          payload: "STEP4_ENGLISH",
        },
      ],
    },
  }),
};
