const userSteps = {}; // Tạm lưu trạng thái step của người dùng theo senderPsid

module.exports = {
  // Gán step mới cho user
  setStep: (senderPsid, step) => {
    userSteps[senderPsid] = step;
  },

  // Lấy step hiện tại
  getStep: (senderPsid) => {
    return userSteps[senderPsid] || null;
  },

  // Xoá step (nếu xong bước)
  clearStep: (senderPsid) => {
    delete userSteps[senderPsid];
  },

  // Debug: hiển thị toàn bộ flow hiện tại
  debug: () => {
    console.log("📋 Current user steps:", userSteps);
  },
};
