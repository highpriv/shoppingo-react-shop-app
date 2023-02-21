import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const register = async (email, password) => {
  return axios.post(apiUrl + "register", {
    email,
    password,
  });
};

const login = async (email, password) => {
  return axios.post(apiUrl + "login", {
    email,
    password,
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
