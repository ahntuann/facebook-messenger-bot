const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 672

module.exports = {
  STEP14_DIRECTION1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Dưới đây là các gói Email Flows Automations toàn diện đang được Moonpie cung cấp, hãy lựa chọn gói dịch vụ anh/chị muốn tìm hiểu thêm:",

      quick_replies: [
        {
          content_type: "text",
          title: "Gói Starter",
          payload: "STEP14_DIRECTION1_1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Gói Growth",
          payload: "STEP14_DIRECTION1_2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Gói Premium",
          payload: "STEP14_DIRECTION1_3_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Gói Elite",
          payload: "STEP14_DIRECTION1_4_VIETNAMESE",
        },
      ],
    },
  }),

  STEP14_DIRECTION1_1_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Gói Starter (Thiết lập ESP, 3 flows tự động hóa thiết yếu), chi tiết dịch vụ bao gồm:" +
          "\n\n✅ Data Acquisition" +
          "\n✅ Welcome Series" +
          "\n✅ Abandoned Checkout & Winback" +
          "\n✅ Thank You & Cross-sell/Upsell" +
          "\n✅ Tối đa 3 nhánh phân loại khách hàng",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION1_2_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Gói Growth (Cài đặt ESP đầy đủ, quy trình tự động hóa, thiết kế & nội dung email, kiểm tra A/B, tối ưu hóa gửi email campaigns), chi tiết dịch vụ bao gồm:" +
          "\n\n✅ Data Acquisition" +
          "\n✅ Welcome Series" +
          "\n✅ Abandoned Checkout & Winback " +
          "\n✅ Thank You & Cross-sell/Upsell" +
          "\n✅ Abandoned Add to Cart" +
          "\n✅ Abandoned Browse" +
          "\n✅ Customer Feedback" +
          "\n✅ Email Pilot 5 campaigns" +
          "\n✅ Tối đa 3 nhánh phân loại khách hàng",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION1_3_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Gói Premium, chi tiết dịch vụ bao gồm:" +
          "\n\n✅ Data Acquisition" +
          "\n✅ Welcome Series" +
          "\n✅ Abandoned Checkout & Winback " +
          "\n✅ Thank You & Cross-sell/Upsell" +
          "\n✅ Abandoned Add to Cart" +
          "\n✅ Abandoned Browse" +
          "\n✅ Abandoned Site" +
          "\n✅ Winback" +
          "\n✅ Sunset" +
          "\n✅ Customer Feedback" +
          "\n✅ Email Flow Pilot 5 campaigns" +
          "\n✅ Tối đa 3 nhánh phân loại khách hàng",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION1_4_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text: "Gói Elite" + "\nCustom Plan toàn diện theo nhu cầu của anh/chị",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },

  STEP14_DIRECTION1_X_1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị có muốn tham khảo thêm các gói khác không?",
      quick_replies: [
        {
          content_type: "text",
          title: "Tham khảo gói khác",
          payload: "STEP14_DIRECTION1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Đăng ký ngay",
          payload: "END_CHAT_VIETNAMESE",
        },

        {
          content_type: "text",
          title: "Kết thúc tư vấn",
          payload: "END_CHAT_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP14_DIRECTION2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Đối với các Flows riêng lẻ, Moonpie cam kết thực hiện:" +
        "\n✅ Lên chiến lược & Lập kế hoạch – Nghiên cứu khách hàng, sản phẩm & đưa ra chiến lược giao tiếp với khách hàng" +
        "\n✅ Viết nội dung & Thiết kế – Mẫu email tùy chỉnh, thiết kế đồng nhất thương hiệu, nội dung tập trung chuyển đổi." +
        "\n✅ A/B Testing & Tối ưu hóa – Tiêu đề email, thời gian gửi, lời kêu gọi hành động (CTA), cải thiện phân khúc." +
        "\nDưới đây là các Email Flows riêng lẻ đang được Moonpie cung cấp:" +
        "\n\n1. Pop up thu email & Welcome Series" +
        "\n2. Abandoned Checkout & Winback " +
        "\n3. Customer Thank you & Cross-sell/Up-sell sau mua hàng " +
        "\n4. Abandoned Add to Cart " +
        "\n5. Browse Abandonment " +
        "\n6. Customer Feedback " +
        "\n7. Site Abandonment " +
        "\n8. Customer Winback " +
        "\n9. Customer Sunset " +
        "\n10. Customer Birthday " +
        "\n11. Happy First Purchased Anniversary " +
        "\n12. VIPs " +
        "\n13. Instructional " +
        "\n14. Replenishment " +
        "\n15. Back-in-Stock " +
        "\n16. Processing & Shipping Flo" +
        "\n\nAnh/chị vui lòng nhập Số thứ tự Flows anh chị muốn sử dụng: (nhập duy nhất 1 số)",
    },
  }),

  STEP14_DIRECTION2_1_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "1. Pop up thu email & Welcome Series" +
          "\n\n- Cài đặt popup thu email của khách hàng (bao gồm khách vào store và khách exit intent)" +
          "\n- All pages " +
          "\n- Embedded Footer " +
          "\n- Kèm theo chuỗi email chăm sóc và chuyển đổi khách hàng thành người mua sau khi khách để lại email trên popup",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_2_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "2. Abandoned Checkout & Winback " +
          "\n\n- Chuỗi email chăm sóc và convert khi khách hàng đã checkout nhưng chưa thanh toán thành công." +
          "\n- Kèm theo chuỗi email convert khách hàng đã abandoned hoàn toàn",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_3_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "3. Customer Thank you & Cross-sell/Up-sell sau mua hàng " +
          "\n\nChuỗi email cảm ơn và chăm sóc khách hàng hậu mua hàng, khuyến khích dùng thêm sản phẩm hoặc upsell/crossell tới khách hàng.",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_4_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "4. Abandoned Add to Cart " +
          "\n\nChuỗi email chăm sóc và convert khách hàng đã add to cart nhưng chưa check out",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_5_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "5. Browse Abandonment " +
          "\n\nChuỗi email chăm sóc và convert khách hàng xem hàng nhưng chưa add to cart",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_6_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "6. Customer Feedback " +
          "\n\nChuỗi email xin feedback của khách hàng",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_7_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "7. Site Abandonment " +
          "\n\nChuỗi email chăm sóc và convert khách hàng đã active on site nhưng chưa có thêm hành động khác",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_8_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "8. Customer Winback " +
          "\n\nChuỗi email chăm sóc, tương tác và convert khách hàng đã từng mua hàng nhưng đã lâu không mua thêm",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_9_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "9. Customer Sunset " +
          "\n\nChuỗi email gửi khách hàng đã lâu không tương tác hoặc unsubscribe",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_10_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "10. Customer Birthday " +
          "\n\nChuỗi email chúc mừng sinh nhật khách hàng",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_11_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "11. Happy First Purchased Anniversary " +
          "\n\nChuỗi email kỷ niệm ngày đầu mua hàng của khách",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_12_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "12. VIPs " +
          "\n\nChuỗi email chăm sóc khách hàng VIPs hoặc theo tier",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_13_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "13. Instructional " +
          "\n\nChuỗi email hướng dẫn khách hàng cách dùng sản phẩm",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_14_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "14. Replenishment " +
          "\n\nChuỗi email nhắc nhở khách đến thời gian mua hàng (đối với các sản phẩm cần topup/đổi mới…)",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_15_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "15. Back-in-Stock " +
          "\n\nChuỗi email báo sản phẩm đã back in stock sau khi hết hàng",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_16_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "16. Processing & Shipping Flo" +
          "\n\n- 1. Fulfilled" +
          "\n- 2. Out for delivery " +
          "\n- 3. Delivered",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },

  STEP14_DIRECTION2_X_1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị có muốn tham khảo thêm các flow khác không?",
      quick_replies: [
        {
          content_type: "text",
          title: "Tham khảo flows khác",
          payload: "STEP14_DIRECTION2_MORE_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Đăng ký ngay",
          payload: "END_CHAT_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Kết thúc tư vấn",
          payload: "END_CHAT_VIETNAMESE",
        },
      ],
    },
  }),

  STEP14_DIRECTION2_MORE_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị vui lòng nhập Số thứ tự Flows anh chị muốn sử dụng: (nhập duy nhất 1 số)",
    },
  }),

  STEP14_DIRECTION2_WRONG_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Số bạn nhập không đúng. Vui lòng nhập từ 1 đến 16.",
    },
  }),

  //

  STEP14_DIRECTION3_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Dưới đây là các gói Email Campaigns đang được Moonpie cung cấp, hãy lựa chọn gói dịch vụ anh/chị muốn tìm hiểu thêm:",

      quick_replies: [
        {
          content_type: "text",
          title: "Gói Trial",
          payload: "STEP14_DIRECTION3_1_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Gói Standard",
          payload: "STEP14_DIRECTION3_2_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Gói Grow",
          payload: "STEP14_DIRECTION3_3_VIETNAMESE",
        },
      ],
    },
  }),

  STEP14_DIRECTION3_1_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFuncLevel1,
    nextStepFuncLevel2,
    nextStepFuncLevel3
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "\n🌟 Tối đa hóa doanh thu" +
          "\n🌟 Tăng sự gắn kết với khách hàng" +
          "\n🌟 Tăng tỷ lệ khách quay trở lại" +
          "\n🌟 Branding – Tăng nhận diện thương hiệu" +
          "\n🌟 Kết nối với khách hàng qua các content được “đo ni đóng giày” cho brand",
      },
    });

    await wait(1000);
    await nextStepFuncLevel1(senderPsid);

    await wait(1000);
    await nextStepFuncLevel2(senderPsid);

    await wait(1000);
    await nextStepFuncLevel3(senderPsid);
  },
  STEP14_DIRECTION3_2_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFuncLevel1,
    nextStepFuncLevel2,
    nextStepFuncLevel3
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "🌟 Tối đa hóa doanh thu" +
          "\n🌟 Tăng sự gắn kết với khách hàng" +
          "\n🌟 Tăng tỷ lệ khách quay trở lại" +
          "\n🌟 Branding – Tăng nhận diện thương hiệu" +
          "\n🌟 Kết nối với khách hàng qua các content được “đo ni đóng giày” cho brand",
      },
    });

    await wait(1000);
    await nextStepFuncLevel1(senderPsid);

    await wait(1000);
    await nextStepFuncLevel2(senderPsid);

    await wait(1000);
    await nextStepFuncLevel3(senderPsid);
  },
  STEP14_DIRECTION3_3_VIETNAMESE: async (
    senderPsid,
    callSendAPI,
    nextStepFuncLevel1,
    nextStepFuncLevel2,
    nextStepFuncLevel3
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "🌟 Tối đa hóa doanh thu" +
          "\n🌟 Tăng sự gắn kết với khách hàng" +
          "\n🌟 Tăng tỷ lệ khách quay trở lại" +
          "\n🌟 Branding – Tăng nhận diện thương hiệu" +
          "\n🌟 Kết nối với khách hàng qua các content được “đo ni đóng giày” cho brand",
      },
    });

    await wait(1000);
    await nextStepFuncLevel1(senderPsid);

    await wait(1000);
    await nextStepFuncLevel2(senderPsid);

    await wait(1000);
    await nextStepFuncLevel3(senderPsid);
  },

  STEP14_DIRECTION3_X_1_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Dịch vụ chi tiết trong gói",
    },
  }),

  STEP14_DIRECTION3_X_2_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Moonpie cam kết sẽ thực hiện toàn diện:" +
        "\n\n✅ Chiến lược & Lập kế hoạch – Nghiên cứu khách hàng, sản phẩm & đưa ra chiến lược giao tiếp với khách hàng" +
        "\n✅ Viết nội dung & Thiết kế – Mẫu email tùy chỉnh, thiết kế đồng nhất thương hiệu, nội dung tập trung chuyển đổi." +
        "\n✅ A/B Testing & Tối ưu hóa – Tiêu đề email, thời gian gửi, lời kêu gọi hành động (CTA), cải thiện phân khúc." +
        "\n✅ Email Deliverability – Warm up domain, spam filter, tuân thủ GDPR/CCPA.",
    },
  }),

  STEP14_DIRECTION3_X_3_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Anh/chị có muốn tham khảo thêm các gói khác không?",
      quick_replies: [
        {
          content_type: "text",
          title: "Tham khảo gói khác",
          payload: "STEP14_DIRECTION3_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Đăng ký ngay",
          payload: "END_CHAT_VIETNAMESE",
        },
        {
          content_type: "text",
          title: "Kết thúc tư vấn",
          payload: "END_CHAT_VIETNAMESE",
        },
      ],
    },
  }),

  //

  STEP14_DIRECTION1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Below are the comprehensive Email Flows Automations packages offered by Moonpie. Please select the package you would like to learn more about:",

      quick_replies: [
        {
          content_type: "text",
          title: "Starter Package",
          payload: "STEP14_DIRECTION1_1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Growth Package",
          payload: "STEP14_DIRECTION1_2_ENGLISH",
        },
        {
          content_type: "text",
          title: "Premium Package",
          payload: "STEP14_DIRECTION1_3_ENGLISH",
        },
        {
          content_type: "text",
          title: "Elite Package",
          payload: "STEP14_DIRECTION1_4_ENGLISH",
        },
      ],
    },
  }),

  STEP14_DIRECTION1_1_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Starter Package (ESP setup, 3 essential automated flows)" +
          "\n\n✅ Data Acquisition" +
          "\n✅ Welcome Series" +
          "\n✅ Abandoned Checkout & Winback" +
          "\n✅ Thank You & Cross-sell/Upsell" +
          "\n✅ Up to 3 customer segmentation branches",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION1_2_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Growth Package (Full ESP setup, automation workflows, email design & content, A/B testing, optimized email campaigns)" +
          "\n\n✅ Data Acquisition" +
          "\n✅ Welcome Series" +
          "\n✅ Abandoned Checkout & Winback" +
          "\n✅ Thank You & Cross-sell/Upsell" +
          "\n✅ Abandoned Add to Cart" +
          "\n✅ Abandoned Browse" +
          "\n✅ Customer Feedback" +
          "\n✅ Email Pilot 5 campaigns" +
          "\n✅ Up to 3 customer segmentation branches",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION1_3_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "Premium Package" +
          "\n\n✅ Data Acquisition" +
          "\n✅ Welcome Series" +
          "\n✅ Abandoned Checkout & Winback" +
          "\n✅ Thank You & Cross-sell/Upsell" +
          "\n✅ Abandoned Add to Cart" +
          "\n✅ Abandoned Browse" +
          "\n✅ Abandoned Site" +
          "\n✅ Winback" +
          "\n✅ Sunset" +
          "\n✅ Customer Feedback" +
          "\n✅ Email Flow Pilot 5 campaigns" +
          "\n✅ Up to 3 customer segmentation branches",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION1_4_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text: "Elite Package" + "\nCustom Plan fully tailored to your needs",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },

  STEP14_DIRECTION1_X_1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Would you like to explore other packages?",
      quick_replies: [
        {
          content_type: "text",
          title: "Other packages",
          payload: "STEP14_DIRECTION1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Buy service",
          payload: "END_CHAT_ENGLISH",
        },

        {
          content_type: "text",
          title: "End consultation",
          payload: "END_CHAT_ENGLISH",
        },
      ],
    },
  }),

  //

  STEP14_DIRECTION2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Moonpie commits to delivering the following for custom flows:" +
        "\n✅ Strategy & Planning – Customer and product research to develop communication strategies" +
        "\n✅ Content & Design – Custom email templates, brand-consistent design, conversion-focused content" +
        "\n✅ A/B Testing & Optimization – Optimize email titles, timing, CTA, and segmentation" +
        "\n\nBelow are the individual Email Flows currently available:" +
        "\n1. Pop up thu email & Welcome Series  " +
        "\n2. Abandoned Checkout & Winback  " +
        "\n3. Customer Thank you & Cross-sell/Up-sell sau mua hàng  " +
        "\n4. Abandoned Add to Cart  " +
        "\n5. Browse Abandonment  " +
        "\n6. Customer Feedback  " +
        "\n7. Site Abandonment  " +
        "\n8. Customer Winback  " +
        "\n9. Customer Sunset  " +
        "\n10. Customer Birthday  " +
        "\n11. Happy First Purchased Anniversary  " +
        "\n12. VIPs  " +
        "\n13. Instructional  " +
        "\n14. Replenishment  " +
        "\n15. Back-in-Stock  " +
        "\n16. Processing & Shipping Flow" +
        "\n\nPlease choose which Flows you'd like to implement, please enter Order Number (enter only 1 number)",
    },
  }),

  STEP14_DIRECTION2_1_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "1. Pop-up Email & Welcome Series" +
          "\n- Set up email pop-up for customer collection (includes store visitors & exit intent) " +
          "\n- All pages " +
          "\n- Embedded footer " +
          "\n- Includes nurturing and conversion email series after user submits email",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_2_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "2. Abandoned Checkout & Winback" +
          "\n- Email series to nurture and convert customers who started checkout but didn’t complete payment " +
          "\n- Includes winback emails for fully abandoned checkouts",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_3_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "3. Customer Thank You & Cross-sell/Upsell" +
          "\n- Thank-you and post-purchase nurturing email series " +
          "\n- Encourages customers to explore additional products via upsell/cross-sell",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_4_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "4. Abandoned Add to Cart" +
          "\nNurturing and conversion emails for customers who added items to cart but didn’t check out",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_5_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "5. Browse Abandonment" +
          "\nEmail series to re-engage visitors who browsed but didn’t add items to cart",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_6_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "6. Customer Feedback" +
          "\nEmail flow to collect feedback from customers",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_7_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "7. Site Abandonment" +
          "\nNurturing and conversion emails for users who were active on the site but didn’t take further action",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_8_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "8. Customer Winback" +
          "\nRe-engagement series for customers who purchased before but haven’t returned in a while",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_9_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "9. Customer Sunset" +
          "\nEmail flow for long-inactive customers to encourage reactivation or unsubscribe cleanup",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_10_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text: "10. Customer Birthday" + "\nBirthday greeting email flow",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_11_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "11. Happy First Purchase Anniversary" +
          "\nAnniversary emails celebrating the customer’s first purchase date",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_12_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "12. VIPs" +
          "\nSpecial treatment emails for VIP or high-tier customers",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_13_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "13. Instructional" +
          "\nProduct usage guidance or tutorials for customers",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_14_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "14. Replenishment" +
          "\nReminder flow for product repurchase cycles (e.g., top-up, refill items)",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_15_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "15. Back-in-Stock" +
          "\nEmail notification when out-of-stock items are restocked",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },
  STEP14_DIRECTION2_16_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFunc
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "16. Processing & Shipping Flow" +
          "\n- Fulfilled " +
          "\n- Out for delivery " +
          "\n- Delivered",
      },
    });

    setTimeout(() => {
      nextStepFunc(senderPsid);
    }, 1000);
  },

  STEP14_DIRECTION2_X_1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Would you like to explore other packages?",
      quick_replies: [
        {
          content_type: "text",
          title: "Other Flows",
          payload: "STEP14_DIRECTION2_MORE_ENGLISH",
        },
        {
          content_type: "text",
          title: "Buy service",
          payload: "END_CHAT_ENGLISH",
        },
        {
          content_type: "text",
          title: "End consultation",
          payload: "END_CHAT_ENGLISH",
        },
      ],
    },
  }),

  STEP14_DIRECTION2_MORE_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Please enter the Flows Order Number you want to use: (enter only 1 number)",
    },
  }),

  STEP14_DIRECTION2_WRONG_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Invalid number. Please enter a value between 1 and 16.",
    },
  }),

  //

  STEP14_DIRECTION3_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Below are the Email Campaigns packages currently provided by Moonpie, please choose the service package you want to learn more about:",

      quick_replies: [
        {
          content_type: "text",
          title: "Trial package",
          payload: "STEP14_DIRECTION3_1_ENGLISH",
        },
        {
          content_type: "text",
          title: "Standard package",
          payload: "STEP14_DIRECTION3_2_ENGLISH",
        },
        {
          content_type: "text",
          title: "Grow Package",
          payload: "STEP14_DIRECTION3_3_ENGLISH",
        },
      ],
    },
  }),

  STEP14_DIRECTION3_1_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFuncLevel1,
    nextStepFuncLevel2,
    nextStepFuncLevel3
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "\n✨ Revenue optimization " +
          "\n✨ Increase customer engagement " +
          "\n✨ Improve return customer rate " +
          "\n✨ Branding – Enhance brand recognition " +
          "\n✨ Connect with customers through tailor-made content specifically “custom-fit” for your brand",
      },
    });

    await wait(1000);
    await nextStepFuncLevel1(senderPsid);

    await wait(1000);
    await nextStepFuncLevel2(senderPsid);

    await wait(1000);
    await nextStepFuncLevel3(senderPsid);
  },
  STEP14_DIRECTION3_2_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFuncLevel1,
    nextStepFuncLevel2,
    nextStepFuncLevel3
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "\n✨ Revenue optimization " +
          "\n✨ Increase customer engagement " +
          "\n✨ Improve return customer rate " +
          "\n✨ Branding – Enhance brand recognition " +
          "\n✨ Connect with customers through tailor-made content specifically “custom-fit” for your brand",
      },
    });

    await wait(1000);
    await nextStepFuncLevel1(senderPsid);

    await wait(1000);
    await nextStepFuncLevel2(senderPsid);

    await wait(1000);
    await nextStepFuncLevel3(senderPsid);
  },
  STEP14_DIRECTION3_3_ENGLISH: async (
    senderPsid,
    callSendAPI,
    nextStepFuncLevel1,
    nextStepFuncLevel2,
    nextStepFuncLevel3
  ) => {
    await callSendAPI({
      recipient: { id: senderPsid },
      message: {
        text:
          "\n✨ Revenue optimization " +
          "\n✨ Increase customer engagement " +
          "\n✨ Improve return customer rate " +
          "\n✨ Branding – Enhance brand recognition " +
          "\n✨ Connect with customers through tailor-made content specifically “custom-fit” for your brand",
      },
    });

    await wait(1000);
    await nextStepFuncLevel1(senderPsid);

    await wait(1000);
    await nextStepFuncLevel2(senderPsid);

    await wait(1000);
    await nextStepFuncLevel3(senderPsid);
  },

  STEP14_DIRECTION3_X_1_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Detailed services in the package",
    },
  }),

  STEP14_DIRECTION3_X_2_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Moonpie commits to fully delivering the following:" +
        "\n✅ Strategy & Planning – Research customers and products to develop effective communication strategies" +
        "\n✅ Content & Design – Customized email templates with brand-consistent design, conversion-focused messaging" +
        "\n✅ A/B Testing & Optimization – Optimize subject lines, send times, CTAs, and segmentation" +
        "\n✅ Email Deliverability – Domain warming, spam filter optimization, and GDPR/CCPA compliance",
    },
  }),

  STEP14_DIRECTION3_X_3_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Would you like to see other packages?",
      quick_replies: [
        {
          content_type: "text",
          title: "Other packages",
          payload: "STEP14_DIRECTION3_ENGLISH",
        },
        {
          content_type: "text",
          title: "Buy service",
          payload: "END_CHAT_ENGLISH",
        },
        {
          content_type: "text",
          title: "End consultation",
          payload: "END_CHAT_ENGLISH",
        },
      ],
    },
  }),
};
