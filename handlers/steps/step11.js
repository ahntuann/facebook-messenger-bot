module.exports = {
  STEP11_VIETNAMESE: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "Để tư vấn kĩ hơn, anh/chị vui lòng cho biết số lượng data email khách hàng doanh nghiệp hiện có là bao nhiêu? Vui lòng nhập một số",
    },
  }),

  //

  STEP11_ENGLISH: (senderPsid) => ({
    recipient: { id: senderPsid },
    message: {
      text: "How many customer email contacts does your business currently have? (Please enter a number)",
    },
  }),
};
