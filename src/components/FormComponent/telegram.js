import axios from 'axios';


export const sendForm = async (data) => {
  const message =
    `<b>Ім'я:</b> ${data.name}\n` +
    `<b>Прізвище:</b> ${data.lastName}\n` +
    `<b>Телефон:</b> ${data.phone}\n` +
    `<b>Філія:</b> ${data.branch}\n` +
    `<b>Категорія:</b> ${data.category}\n` +
    `<b>Message was sent:</b> ${new Date().toLocaleString('en-US')}\n`;

  try {
    await axios.post('/api/send', { message});
    return true;
  } catch (_) {
    return false;
  }
};
