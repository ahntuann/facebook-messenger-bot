module.exports = {
  STEP6_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị đang kinh doanh trên nền tảng nào?",

      quick_replies: [
        {
          content_type: "text",
          title: "Shopify ",
          payload: "STEP7_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Woocommerce/ Wordpress",
          payload: "STEP7_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "ShopBase",
          payload: "STEP7_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Magento",
          payload: "STEP7_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Các nền tảng khác",
          payload: "STEP7_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP6_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Which platforms are you selling on?",

      quick_replies: [
        {
          content_type: "text",
          title: "Shopify ",
          payload: "STEP7_ENGLISH",
        },
        {
          content_type: "text",
          title: "Woocommerce/ Wordpress",
          payload: "STEP7_ENGLISH",
        },
        {
          content_type: "text",
          title: "ShopBase",
          payload: "STEP7_ENGLISH",
        },
        {
          content_type: "text",
          title: "Magento",
          payload: "STEP7_ENGLISH",
        },
        {
          content_type: "text",
          title: "Other platforms",
          payload: "STEP7_ENGLISH",
        },
      ],
    },
  }),
};
