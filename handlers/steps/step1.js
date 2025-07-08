module.exports = {
  STEP1: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Your language / Ngôn ngữ của bạn",
      quick_replies: [
        {
          content_type: "text",
          title: "Tiếng Việt",
          payload: "STEP1_2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "English",
          payload: "STEP1_2_ENGLISH",
        },
      ],
    },
  }),

  STEP1_2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Chào anh/chị, Moonpie Global là Công ty Agency thương mại điện tử xuyên biên giới cam kết hỗ trợ các doanh nghiệp vừa và nhỏ mở rộng, phát triển và đạt được thành công trong thị trường số đầy cạnh tranh." +
        "\n\nChúng tôi có thể giúp gì cho anh/ chị ? ",
      quick_replies: [
        {
          content_type: "text",
          title: "Tư vấn ngay",
          payload: "STEP2_DIRECTION1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Hẹn tư vấn sau",
          payload: "STEP2_DIRECTION2_VIETNAMESE",
        },
      ],
    },
  }),

  STEP1_2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Hi," +
        "\nMoonpie Global is a cross-border e-commerce agency committed to helping small and medium-sized businesses expand, grow, and succeed in the highly competitive digital marketplace." +
        "\n\nHow can we assist you today?",
      quick_replies: [
        {
          content_type: "text",
          title: "Consultation now",
          payload: "STEP2_DIRECTION1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Consultation later",
          payload: "STEP2_DIRECTION2_ENGLISH",
        },
      ],
    },
  }),
};
