import {
  Candy,
  Moon,
  Paintbrush,
  ShieldPlus,
  Squirrel,
  Sun,
} from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const menu = [
    {
      name: "Icon",
      icon: Squirrel,
    },
    {
      name: "Background",
      icon: Paintbrush,
    },
    {
      name: "Upgrade",
      icon: ShieldPlus,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Candy /> Ico<span>sium</span>
        </h1>
        <div className={styles.menu}>
          {menu.map((me, idx) => (
            <div className={styles.menuChild}>
              <me.icon />
              {me.name}
            </div>
          ))}
        </div>
        <div className={styles.theme}>
          <div className={styles.themeChild}>
            <Moon />
            Dark
          </div>
          <div className={styles.themeChild}>
            <Sun />
            Light
          </div>
        </div>
      </div>
    </>
  );
}
