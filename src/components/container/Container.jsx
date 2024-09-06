import styles from "./Container.module.css";
import Sidebar from "../sidebar/Sidebar";
import Body from "../body/Body";

export default function Container() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <Body />
      </div>
    </>
  );
}
