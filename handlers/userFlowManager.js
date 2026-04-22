const db = require("../db");

module.exports = {
  // Khởi tạo bảng nếu chưa có (Chỉ chạy lần đầu)
  initDB: async () => {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        psid TEXT PRIMARY KEY,
        current_step TEXT,
        is_interacted BOOLEAN DEFAULT FALSE,
        is_human_takeover BOOLEAN DEFAULT FALSE
      );
    `;
    await db.query(queryText);
  },

  // Gán step mới
  setStep: async (senderPsid, step) => {
    const query = `
      INSERT INTO users (psid, current_step, is_interacted)
      VALUES ($1, $2, TRUE)
      ON CONFLICT (psid) DO UPDATE SET current_step = $2, is_interacted = TRUE;
    `;
    await db.query(query, [senderPsid, step]);
  },

  // Lấy step hiện tại
  getStep: async (senderPsid) => {
    const res = await db.query(
      "SELECT current_step FROM users WHERE psid = $1",
      [senderPsid],
    );
    return res.rows.length > 0 ? res.rows[0].current_step : null;
  },

  // Xoá step
  clearStep: async (senderPsid) => {
    await db.query("UPDATE users SET current_step = NULL WHERE psid = $1", [
      senderPsid,
    ]);
  },

  // Đánh dấu đã tương tác
  markInteracted: async (senderPsid) => {
    await db.query(
      "INSERT INTO users (psid, is_interacted) VALUES ($1, TRUE) ON CONFLICT (psid) DO UPDATE SET is_interacted = TRUE",
      [senderPsid],
    );
  },

  // Kiểm tra trạng thái
  getUserStatus: async (senderPsid) => {
    const res = await db.query(
      "SELECT is_interacted, is_human_takeover FROM users WHERE psid = $1",
      [senderPsid],
    );
    return res.rows.length > 0
      ? res.rows[0]
      : { is_interacted: false, is_human_takeover: false };
  },

  // Admin can thiệp
  markHumanTakeover: async (senderPsid) => {
    await db.query(
      "INSERT INTO users (psid, is_human_takeover) VALUES ($1, TRUE) ON CONFLICT (psid) DO UPDATE SET is_human_takeover = TRUE",
      [senderPsid],
    );
  },

  setHumanTakeover: async (senderPsid, status) => {
    await db.query(
      "INSERT INTO users (psid, is_human_takeover) VALUES ($1, $2) ON CONFLICT (psid) DO UPDATE SET is_human_takeover = $2",
      [senderPsid, status],
    );
  },
};
