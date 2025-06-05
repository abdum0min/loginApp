import axios from "axios";

export const loginUser = async ({ username, password }) => {
  const response = await axios.post("https://dummyjson.com/auth/login", {
    username,
    password,
  });
  return response.data;
};