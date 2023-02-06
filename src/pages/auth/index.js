import Navbar from "../../layouts";
import styles from "./Auth.module.css";
const Auth = () => {
    return (
      <div className={styles.containerMain}>
        <Navbar />
        <div className={styles.welcomeHead}>
          <h1>Merhaba,</h1>
          <p>ShoppinGo'ya giriş yap veya üye ol, fırsatları kaçırma!</p>
        </div>
      </div>
    );
  };
  
  export default Auth;
  
