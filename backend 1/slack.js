const axios = require('axios');

async function sendToSlack(message) {
  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text: `📋 Todo Summary:\n\n${message}`,
  });
}

module.exports = { sendToSlack };
