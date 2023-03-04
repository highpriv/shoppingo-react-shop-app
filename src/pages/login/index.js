import Navbar from "../../layouts";
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import AuthService from "../../services/auth";
import { useCookies } from "react-cookie";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";


export default function Login() {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const callbackUrl = (router.query?.callbackUrl) ?? "/";


  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    try {

       const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!response.error) {
        setMessage({ type: "success", message: "Logged in successfully." });
        setSuccessful(true);
        router.push(callbackUrl);
      } else {
      setMessage({ type: "error", message: "An error occured when login." });
      setSuccessful(false);

      
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.containerMain}>
      <Navbar />
      <div className={styles.welcomeHead}>
        <h1>Merhaba,</h1>
        <p>ShoppinGo'ya giriş yap veya üye ol, fırsatları kaçırma!</p>
        {message.message ? (
          <Alert severity={message.type} className={styles.messageDialog}>
            <span>{message.message}</span>
          </Alert>
        ) : (
          ""
        )}
        <div className={styles.authBox}>
          <div className={styles.authTabs}>
            <span className={styles.activeTab}>
              <a href="#">Giriş Yap</a>
            </span>
            <span className={styles.whiteSpace}></span>
            <span>
              <a className={styles.registerLink} href="/register">
                Üye Ol
              </a>
            </span>
          </div>
          <div className={styles.formSection}>
            <form className={styles.formArea}>
              <div className={styles.inputField}>
                <span>E-Posta</span>
                <span>
                  <input
                    type="text"
                    class="mail"
                    name="mail"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </span>
              </div>
              <div className={styles.inputField}>
                <span>Şifre</span>
                <span>
                  <input
                    type="password"
                    class="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </span>
              </div>
              <div className={styles.forgottenPw}>
                <span>
                  <a href="#">Şifremi Unuttum</a>
                </span>
              </div>
              <div className={styles.inputField}>
                <span>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={handleLogin}
                  >
                    GİRİŞ YAP
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
