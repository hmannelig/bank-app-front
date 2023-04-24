import axios from "axios";

export const signUpUser = async (name, surname, email, password) => {
  try {
    const response = await axios.post("/api/signup", {
      name,
      surname,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
