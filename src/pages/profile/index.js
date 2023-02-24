import styles from "./Profile.module.css";
import { ProfileSidebar } from "../../components";
import Navbar from "../../layouts";

const Profile = () => {
  return (
    <div className={styles.containerMain}>
      <Navbar />

      <div className={styles.sidebarProfile}>
        <ProfileSidebar />
      </div>
    </div>
  );
};

export default Profile;
