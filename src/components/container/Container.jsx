import styles from "./Container.module.css";
import Sidebar from "../sidebar/Sidebar";
import Body from "../body/Body";
import { useState } from "react";

export default function Container() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <>
      <div className={styles.container}>
        <Sidebar setSelectedIdx={setSelectedIdx} />
        <Body selectedIdx={selectedIdx} />
      </div>
    </>
  );
}
