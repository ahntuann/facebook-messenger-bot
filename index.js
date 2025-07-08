require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const webhook = require("./webhook");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", webhook);

app.get("/ping", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    "Using PAGE_ACCESS_TOKEN:",
    process.env.PAGE_ACCESS_TOKEN.slice(0, 10) + "..."
  );
});
