import styles from "./Icon.module.css";
import Slider from "../UI/Slider";

export default function Icon() {
  return (
    <>
      <div className={styles.container}>
        <Slider name={"Rounded"} />
        <Slider name={"Padding"} />
      </div>
    </>
  );
}
