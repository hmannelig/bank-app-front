import axios from "axios";

export const handleLogin = async (username, password) => {
  try {
    const response = await axios.post("/api/login", { username, password });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
