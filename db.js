const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Bắt buộc khi dùng các dịch vụ như Neon/Render/Supabase
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
