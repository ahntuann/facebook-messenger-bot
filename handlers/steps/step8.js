module.exports = {
  STEP8_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Ở Việt Nam chúng tôi cung cấp 2 dịch vụ chính: " +
        "\n - Retention Marketing (Email, SMS, Loyalty..) " +
        "\n - Tư vấn Amazon & các sàn thương mại điện tử EU " +
        "\nAnh/chị cần tư vấn: ",

      quick_replies: [
        {
          content_type: "text",
          title: "Retention Marketing",
          payload: "STEP9_DIRECTION2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Sàn TMĐT quốc tế",
          payload: "STEP9_DIRECTION1_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP8_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "In Vietnam we provide 2 main services:" +
        "\n\n - Retention Marketing (Email, SMS, Loyalty..)" +
        "\n - Consulting Amazon & EU e-commerce platforms You need advice on:",

      quick_replies: [
        {
          content_type: "text",
          title: "Retention Marketing",
          payload: "STEP9_DIRECTION2_ENGLISH",
        },
        {
          content_type: "text",
          title: "Ecom platforms",
          payload: "STEP9_DIRECTION1_ENGLISH",
        },
      ],
    },
  }),
};
