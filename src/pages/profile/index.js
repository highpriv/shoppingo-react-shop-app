import styles from "./Profile.module.css";
import { ProfileSidebar, Orders } from "../../components";
import Navbar from "../../layouts";

const Profile = () => {
  return (
    <div className={styles.containerMain}>
      <Navbar />
      <div className={styles.contentArea}>
        <div className={styles.sidebarProfile}>
          <ProfileSidebar />
        </div>
        <div className={styles.ordersSection}>
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default Profile;
