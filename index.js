require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const webhook = require("./webhook");
const userFlowManager = require("./handlers/userFlowManager");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", webhook);

app.get("/ping", async (req, res) => {
  try {
    await db.query("SELECT 1");
    res.send("Bot và Database đang thức!");
    console.log("Ping nhận được: Đã đánh thức Render và Database.");
  } catch (err) {
    console.error("Lỗi Ping DB:", err.message);
    res.status(500).send("Database đang ngủ hoặc lỗi kết nối.");
  }
});

// Khởi tạo DB xong mới mở cổng Server
userFlowManager
  .initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("Database initialized and Server is ready.");
    });
  })
  .catch((err) => {
    console.error("Lỗi khởi tạo Database:", err);
    // Vẫn chạy server để nhận traffic nhưng sẽ báo lỗi nếu không kết nối được DB
    app.listen(PORT, () =>
      console.log(`Server running with DB error on port ${PORT}`),
    );
  });
