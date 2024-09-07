import styles from "./Body.module.css";
import Header from "../header/Header";
import Icon from "../Icon/Icon";
import Background from "../Background/Background";

export default function Body({ selectedIdx }) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {selectedIdx === 0 && <Icon />}
        {selectedIdx === 1 && <Background />}
        {selectedIdx === 2 && <Upgrade />}
      </div>
    </>
  );
}
