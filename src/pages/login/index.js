import Navbar from "../../layouts";
import styles from "./Login.module.css";
import Button from '@mui/material/Button';

const Login = () => {
    return (
      <div className={styles.containerMain}>
        <Navbar />
        <div className={styles.welcomeHead}>
          <h1>Merhaba,</h1>
          <p>ShoppinGo'ya giriş yap veya üye ol, fırsatları kaçırma!</p>
          
          <div className={styles.authBox}>
            <div className={styles.authTabs}>
              <span className={styles.activeTab}>
                <a href="#">Giriş Yap</a>
              </span>
              <span className={styles.whiteSpace}></span>
              <span>
                Üye Ol
              </span>
              </div>

              <div className={styles.formSection}>
              
              <form className={styles.formArea}>
              <div className={styles.inputField}>
              <span>E-Posta</span>
             <span>
             <input type="text" class="mail" name="mail" />
             </span>
              </div>
              <div className={styles.inputField}>
              <span>Şifre</span>
             <span>
             <input type="password" class="password" name="password" />
             </span>
              </div>
              <div className={styles.forgottenPw}>
                <span>
                <a href="#">Şifremi Unuttum</a>
                </span>
              </div>
              <div className={styles.loginButton}>
                <span>
                <Button variant="contained" size="large" disableElevation>
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
  
  export default Login;
  