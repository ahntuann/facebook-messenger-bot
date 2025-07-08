module.exports = {
  STEP7_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị đã tìm hiểu về dịch vụ Moonpie chưa?",

      quick_replies: [
        {
          content_type: "text",
          title: "Từng sử dụng",
          payload: "STEP8_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Có tìm hiểu",
          payload: "STEP8_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Chưa biết",
          payload: "STEP7_INTRODUCE_VIETNAMESE",
        },
      ],
    },
  }),
  STEP7_INTRODUCE_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Với sứ mệnh đồng hành cùng SMEs mở rộng và tăng trưởng mạnh mẽ trên thị trường số, Moonpie Global cung cấp giải pháp thương mại điện tử phù hợp với nhu cầu riêng của từng khách hàng.",
    },
  }),

  //

  STEP7_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Have you known about Moonpie's services?",

      quick_replies: [
        {
          content_type: "text",
          title: "Used it before",
          payload: "STEP8_ENGLISH",
        },
        {
          content_type: "text",
          title: "Heard it before",
          payload: "STEP8_ENGLISH",
        },
        {
          content_type: "text",
          title: "Haven’t heard",
          payload: "STEP7_INTRODUCE_ENGLISH",
        },
      ],
    },
  }),
  STEP7_INTRODUCE_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "With a mission to accompany and support small and medium-sized businesses in streamlining their operations and expanding into international markets, Moonpie is proud to be the first official Gold Partner of Klaviyo in Vietnam." +
        "\nMoonpie Global offers tailored e-commerce solutions to meet the unique needs of each customer segment.",
    },
  }),
};
