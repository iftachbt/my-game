import axios from "axios";

export function submitAndGetUser(note, para) {
  return sendPost("http://localhost:4000/" + para, note);
}
async function sendPost(url, body) {
  console.log(url);
  try {
    const res = await axios.post(url, body);
    return res.data;
  } catch (err) {
    console.log(err);
    return "err";
  }
}
