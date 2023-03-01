import Navbar from "../../layouts";
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import AuthService from "../../services/auth";
import { useCookies } from "react-cookie";
import Alert from "@mui/material/Alert";
import { providers, signIn, getSession, csrfToken } from "next-auth/react";

export default function Login({providers, csrfToken}) {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["user"]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    try {
      AuthService.login(email, password).then(
        (response) => {
          if (response.data.token) {
            setCookie("user", response.data.token, {
              path: "/",
              maxAge: 3600, // Expires after 1hr
              sameSite: true,
            });
          }

          setMessage({ type: "success", message: "Logged in successfully." });
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response && error.response.data.error) ||
            error.response.data.message;
          setMessage({ type: "error", message: resMessage });
          setSuccessful(false);
        }
      );
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

Login.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};