import axios from "axios";

const URL = "http://localhost:4000/";

export async function sendPost(route, body) {
  try {
    const res = await axios.post(URL + route, body, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    return "err";
  }
}

export async function sendGet(route) {
  try {
    const res = await axios.get(URL + route, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return "err";
  }
}
