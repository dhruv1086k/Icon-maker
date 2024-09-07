import { useState } from "react";
import styles from "./Slider.module.css";

export default function Slider({ name }) {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <div className={styles.top}>
          <h1>{name}</h1>
          <h3>{sliderValue} &deg;</h3>
        </div>
        <div className={styles.range}>
          <input
            onChange={(e) => {
              setSliderValue(e.target.value);
            }}
            type="range"
            min={0}
            max={100}
            defaultValue={0}
          />
        </div>
      </div>
    </>
  );
}
