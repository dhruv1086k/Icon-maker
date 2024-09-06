import { Bell, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.userImage}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg"
              alt="User Image"
            />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userInfoLeft}>
              <h3>Nicholas Turner</h3>
              <h4>SaaS Blocks LLC</h4>
            </div>
            <div className={styles.userInfoRight}>
              <ChevronDown />
            </div>
          </div>
          <div className={styles.userNotification}>
            <div className={styles.infoNotiContainer}>
              <Bell />
            </div>
            <div className={styles.infoDot}></div>
          </div>
        </div>
        <hr className={styles.hr} />
      </div>
    </>
  );
}
