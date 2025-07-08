module.exports = {
  STEP13_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Với lượng data như trên, sau khi có truy cập vào Klaviyo của store, Moonpie sẽ gửi lại proposals  chỉ từ 3 đến 5 ngày làm việc. Proposals gồm có:" +
        "\n\n - Audit chi tiết" +
        "\n - Đề xuất hướng chạy email marketing " +
        "\n - Báo giá, cam kết chất lượng và thời gian hoàn thành" +
        "\n\nHi vọng với những cam kết trên, anh/chị có thể hoàn toàn yên tâm về các gói dịch vụ Moonpie đang cung cấp." +
        "\nHãy cho Moonpie biết Anh/chị đang quan tâm về mảng nào trong Email Marketing:",

      quick_replies: [
        {
          content_type: "text",
          title: "Email Flow",
          payload: "STEP13_DIRECTION1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Email Campaign",
          payload: "STEP14_DIRECTION3_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Flow khác Campaign?",
          payload: "STEP13_EXPLAIN_VIETNAMESE",
        },
      ],
    },
  }),

  STEP13_EXPLAIN_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "1. Flows" +
        "\nLà chuỗi email tự động gửi dựa trên hành vi của khách hàng trên website, như: đăng ký nhận tin, thêm giỏ hàng, hủy đơn, thanh toán... Dùng để chào mừng, nhắc nhở, xác nhận đơn hoặc khuyến khích hoàn tất hành động mong muốn." +
        "\n\n2. Email Campaigns" +
        "\nLà email gửi theo từng đợt đến nhóm khách hàng được phân loại theo độ tuổi, giới tính, khu vực, sở thích, lịch sử mua hàng...Thường dùng để giới thiệu ưu đãi, bộ sưu tập mới, khảo sát khách hàng hoặc thông báo sự kiện." +
        "\n\nAnh/chị đang quan tâm đến loại nào ạ?",

      quick_replies: [
        {
          content_type: "text",
          title: "Email Flow",
          payload: "STEP13_DIRECTION1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Email Campaign",
          payload: "STEP14_DIRECTION3_VIETNAMESE",
        },
      ],
    },
  }),

  STEP13_DIRECTION1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị đã từng làm Email Flow trước đây chưa? ",

      quick_replies: [
        {
          content_type: "text",
          title: "Chưa có Flow",
          payload: "STEP13_DIRECTION1_1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Đã có Flows",
          payload: "STEP13_DIRECTION1_2_VIETNAMESE",
        },
      ],
    },
  }),
  STEP13_DIRECTION1_1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Đối với các doanh nghiệp chưa có Email Flow, Moonpie đề xuất tham khảo:" +
        "\n\n - Các gói Email Flows Automations toàn diện để có trải nghiệm tối ưu nhất." +
        "\n - Một số Flows riêng lẻ tuỳ chỉnh theo nhu cầu" +
        "\n\nAnh/chị mong muốn tham khảo:",

      quick_replies: [
        {
          content_type: "text",
          title: "Gói toàn diện",
          payload: "STEP14_DIRECTION1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Flows tuỳ chỉnh",
          payload: "STEP14_DIRECTION2_VIETNAMESE",
        },
      ],
    },
  }),
  STEP13_DIRECTION1_2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị đã làm những Flows gì? Vui lòng điền tên Flows",
    },
  }),

  STEP13_DIRECTION1_2_1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Đối với các doanh nghiệp đã có Email Flow, Moonpie đề xuất tham khảo:" +
        "\n\n - Các gói Email Flows Automations toàn diện để có trải nghiệm tối ưu nhất." +
        "\n - Một số Flows riêng lẻ tuỳ chỉnh theo nhu cầu" +
        "\n\nAnh/chị mong muốn tham khảo:",

      quick_replies: [
        {
          content_type: "text",
          title: "Gói toàn diện",
          payload: "STEP14_DIRECTION1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Flows tuỳ chỉnh",
          payload: "STEP14_DIRECTION2_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP13_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "With the data you've provided, once we gain access to your store's Klaviyo account, Moonpie will send back a proposal within 3 to 5 business days. The proposal will include:" +
        "\n\n - A detailed audit" +
        "\n - Recommended email marketing strategies" +
        "\n - Pricing, quality commitments, and timeline for completion" +
        "\n\nPlease let us know what you're most interested in so we can better assist you!",

      quick_replies: [
        {
          content_type: "text",
          title: "Email Flow",
          payload: "STEP13_DIRECTION1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Email Campaign",
          payload: "STEP14_DIRECTION3_ENGLISH",
        },
        {
          content_type: "text",
          title: "Distinguish",
          payload: "STEP13_EXPLAIN_ENGLISH",
        },
      ],
    },
  }),

  STEP13_EXPLAIN_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "1. Flows" +
        "\nThese are automated emails triggered by customer actions on the website (online store). For example, when a customer signs up for a newsletter, adds to cart, cancels an order, or leaves the site — a Flow is triggered." +
        "\nThese Flows are often used to send welcome emails, order confirmations, or abandoned cart reminders to encourage the customer to complete the purchase." +
        "\n\n2. Campaigns" +
        "\nThese are emails sent to specific customer groups, which can be filtered by criteria like age, location, gender, purchase history..." +
        "\nCampaigns are typically used for sending promotions, sales updates, product launches, event announcements, or surveys." +
        "\n\nWhich are you interested in?",

      quick_replies: [
        {
          content_type: "text",
          title: "Email Flow",
          payload: "STEP13_DIRECTION1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Email Campaign",
          payload: "STEP14_DIRECTION3_ENGLISH",
        },
      ],
    },
  }),

  STEP13_DIRECTION1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Have you ever set up Email Flows before?",

      quick_replies: [
        {
          content_type: "text",
          title: "No Flows yet",
          payload: "STEP13_DIRECTION1_1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Have set up",
          payload: "STEP13_DIRECTION1_2_ENGLISH",
        },
      ],
    },
  }),
  STEP13_DIRECTION1_1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "For businesses that haven’t set up any Email Flows, Moonpie recommends exploring our Comprehensive Email Flows Automation packages for the best experience. You may also refer to some individual Flow examples." +
        "\nWhich would you like to explore?",

      quick_replies: [
        {
          content_type: "text",
          title: "Comprehensive Flows",
          payload: "STEP14_DIRECTION1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Individual Flows",
          payload: "STEP14_DIRECTION2_ENGLISH",
        },
      ],
    },
  }),
  STEP13_DIRECTION1_2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "What Flows have you implemented so far?",
    },
  }),

  STEP13_DIRECTION1_2_1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Moonpie recommends exploring our Comprehensive Email Flows Automation packages for the best experience. You may also refer to some individual Flow examples." +
        "\nWhich would you like to explore?",

      quick_replies: [
        {
          content_type: "text",
          title: "Comprehensive Flows",
          payload: "STEP14_DIRECTION1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Individual Flows",
          payload: "STEP14_DIRECTION2_ENGLISH",
        },
      ],
    },
  }),
};
