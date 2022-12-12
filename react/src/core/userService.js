import axios from "axios";

let user;

export async function login(username, password) {
  const res = await axios.post('http://localhost:4000/login', {
    user: username,
    pass: password
  })
  console.log(res.data);
  user = res.data;
}

export function logout() {
  user = null;
}

export { user };