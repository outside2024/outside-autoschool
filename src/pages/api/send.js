import axios from 'axios';

const sendFormToTelegram = async (req, res) => {
  try {
    const { message } = req.body;
    const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`;
    await axios.post(url, {
      chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
      parse_mode: 'html',
      text: message,
    });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message to Telegram!' });
  }
};

export default sendFormToTelegram;
