// import axios from 'axios';
//
//
// export const sendForm = async (data) => {
//   const message =
//     `<b>Full Name:</b> ${data.fullName}\n` +
//     `<b>Email:</b> ${data.email}\n` +
//     `<b>Phone:</b> ${data.phone}\n` +
//     `<b>Address:</b> ${data.address}\n${
//     data.message ? `<b>Message:</b> ${data.message}\n` : ''
//     }<b>Message was sent:</b> ${new Date().toLocaleString('en-US')}\n`;
//
//   try {
//     await axios.post('/api/send', { message});
//     return true;
//   } catch (_) {
//     return false;
//   }
// };
