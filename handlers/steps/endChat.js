module.exports = {
  END_CHAT_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Moonpie đã nắm rõ tình hình kinh doanh và mong muốn của anh/chị." +
        "\n\nChúng tôi sẽ liên hệ với anh/chị trong vòng 24h giờ làm việc. Anh/chị vui lòng chú ý điện thoại, Moonpie xin chân thành cảm ơn!",
    },
  }),

  //

  END_CHAT_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text:
        "Moonpie has understood your business situation and wishes." +
        "\n\nWe will contact you within 24 hours of business hours. Please pay attention to your phone, Moonpie sincerely thanks you!",
    },
  }),
};
