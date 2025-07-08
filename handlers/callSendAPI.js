const axios = require("axios");
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

async function callSendAPI(response) {
  try {
    const res = await axios.post(
      `https://graph.facebook.com/v23.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
      response
    );
    console.log("Message sent:", res.data);
  } catch (err) {
    console.error("Send API error:", err.response?.data || err.message);
  }
}

module.exports = callSendAPI;
