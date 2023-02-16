import Navbar from "../../layouts";
import styles from "./Register.module.css";
import Button from "@mui/material/Button";
import AuthService from "../../services/auth";
import { useState } from "react";

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    try {
      AuthService.register(email, password).then(
        (response) => {
          setMessage("Created account.");
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.error) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.containerMain}>
      <Navbar />
      <div className={styles.welcomeHead}>
        <h1>Merhaba,</h1>
        <p>ShoppinGo'ya giriş yap veya üye ol, fırsatları kaçırma!</p>
        <p>{message || successful}</p>

        <div className={styles.authBox}>
          <div className={styles.authTabs}>
            <span>
              <a href="#">Giriş Yap</a>
            </span>
            <span className={styles.whiteSpace}></span>
            <span className={styles.activeTab}>Üye Ol</span>
          </div>

          <div className={styles.formSection}>
            <form className={styles.formArea}>
              <div className={styles.inputField}>
                <span>E-Posta</span>
                <span>
                  <input
                    type="text"
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
                    onClick={handleRegister}
                  >
                    ÜYE OL
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

export default Register;
