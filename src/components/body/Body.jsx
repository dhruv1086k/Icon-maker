import styles from "./Body.module.css";
import Header from "../header/Header";
import Logo from "../Logo/Logo";

export default function Body() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Logo />
      </div>
    </>
  );
}
