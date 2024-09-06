import {
  Candy,
  Moon,
  Paintbrush,
  ShieldPlus,
  Squirrel,
  Sun,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import { useState } from "react";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [themeColor, setThemeColor] = useState(0);

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

  const themeList = [
    {
      name: "Dark",
      icon: Moon,
    },
    {
      name: "Light",
      icon: Sun,
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
            <div
              onClick={() => {
                setSelected(idx);
              }}
              key={idx}
              className={styles.menuChild}
              style={{
                background: selected == idx && "#DF0025",
                color: selected == idx && "#fff",
              }}
            >
              <me.icon />
              {me.name}
            </div>
          ))}
        </div>
        <div className={styles.theme}>
          {themeList.map((theme, idx) => (
            <div
              onClick={() => {
                setThemeColor(idx);
              }}
              className={styles.themeChild}
              style={{
                background: themeColor == idx && "#DF0025",
                color: themeColor == idx && "#fff",
              }}
            >
              <theme.icon />
              {theme.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
