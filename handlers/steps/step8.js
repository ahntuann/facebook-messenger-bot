module.exports = {
  STEP8_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Hiện tại, Moonpie đang cung cấp dịch vụ Life-cycle Marketing cho các doanh nghiệp Ecommerce cross-border. Các dịch vụ chi tiết bao gồm:" +
        "\n - Email & SMS Marketing " +
        "\n - Loyalty & Membership " +
        "\n - Subscription Strategy " +
        "\n - Message Marketing (Whatsapp/LINE) " +
        "\nAnh/chị cần tư vấn: ",

      quick_replies: [
        {
          content_type: "text",
          title: "Email & SMS Marketing",
          payload: "STEP10_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Loyalty & Membership",
          payload: "END_CHAT_VIETNAMESE",
        },

        {
          content_type: "text",
          title: "Subscription Strategy",
          payload: "END_CHAT_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Message Marketing",
          payload: "END_CHAT_VIETNAMESE",
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
