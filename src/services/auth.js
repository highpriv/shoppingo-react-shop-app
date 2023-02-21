import axios from "axios";
import { useCookies } from "react-cookie";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const register = async (email, password) => {
  return axios.post(apiUrl + "register", {
    email,
    password,
  });
};

const login = async (email, password) => {
  const [cookies, setCookie] = useCookies(["user"]);

  return axios
    .post(apiUrl + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        setCookie("user", JSON.stringify(response.data), {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
      }

      return response.data;
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
