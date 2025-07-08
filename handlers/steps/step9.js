module.exports = {
  STEP9_DIRECTION1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị đã từng xây dựng store trên sàn TMĐT quốc tế chưa?",

      quick_replies: [
        {
          content_type: "text",
          title: "Đã có kinh nghiệm",
          payload: "END_CHAT_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Cần tư vấn từ đầu",
          payload: "END_CHAT_VIETNAMESE",
        },
      ],
    },
  }),
  STEP9_DIRECTION2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Hiện nay, Moonpie cung cấp dịch vụ Retention Marketing giúp các doanh nghiệp giữ chân khách hàng cũ, tăng tần suất mua lại, gia tăng giá trị vòng đời khách hàng (CLV), thường thông qua Email Marketing và SMS Marketing." +
        "\n\nAnh/chị đang quan tâm đến:",

      quick_replies: [
        {
          content_type: "text",
          title: "Email Marketing",
          payload: "STEP10_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "SMS Marketing",
          payload: "STEP9_DIRECTION2_1_VIETNAMESE",
        },
      ],
    },
  }),
  STEP9_DIRECTION2_1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Hiện tại, Moonpie đang cung cấp gói SMS Marketing với đầy đủ các bước hỗ trợ toàn diện cho anh/chị, chi tiết dịch vụ bao gồm: " +
        "\n ✅ Cài đặt số điện thoại và kết nối Klaviyo, Omnisend hoặc các nền tảng khác." +
        "\n ✅ Quy trình tự động hóa – Chuỗi email chào mừng, giỏ hàng bị bỏ quên." +
        "\n ✅ A/B Testing & Tối ưu hóa." +
        "\n\nAnh/chị có muốn được tư vấn kỹ hơn không ạ?",

      quick_replies: [
        {
          content_type: "text",
          title: "Tư vấn kĩ hơn",
          payload: "END_CHAT_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Chuyển dịch vụ khác",
          payload: "STEP10_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP9_DIRECTION1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Have you ever built a store on an international e-commerce platform?",

      quick_replies: [
        {
          content_type: "text",
          title: "Experienced",
          payload: "END_CHAT_ENGLISH",
        },
        {
          content_type: "text",
          title: "Need advice",
          payload: "END_CHAT_ENGLISH",
        },
      ],
    },
  }),
  STEP9_DIRECTION2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Currently, Moonpie provides Retention Marketing services to help businesses retain existing customers, increase repeat purchase frequency, and maximize customer lifetime value (CLV), mainly through Email Marketing and SMS Marketing. Which are you more interested in?",

      quick_replies: [
        {
          content_type: "text",
          title: "Email Marketing",
          payload: "STEP10_ENGLISH",
        },
        {
          content_type: "text",
          title: "SMS Marketing",
          payload: "STEP9_DIRECTION2_1_ENGLISH",
        },
      ],
    },
  }),
  STEP9_DIRECTION2_1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Currently, Moonpie offers a complete SMS Marketing package to support businesses in their early steps. It includes:" +
        "\n\n ✅ Phone number collection and integration with Klaviyo, Omnisend, and other platforms" +
        "\n ✅ Automated sequences – Welcome email flow, abandoned cart reminders, etc." +
        "\n ✅ A/B Testing & Optimization",
      quick_replies: [
        {
          content_type: "text",
          title: "More consultation",
          payload: "END_CHAT_ENGLISH",
        },
        {
          content_type: "text",
          title: "Other services",
          payload: "STEP10_ENGLISH",
        },
      ],
    },
  }),
};
