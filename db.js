const { Pool } = require("pg");
require("dotenv").config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    // Ép buộc chấp nhận chứng chỉ tự ký
    rejectUnauthorized: false,
  },
});

pool.on("connect", () => {
  console.log("✅ Đã kết nối thành công tới Database qua Pooler!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
