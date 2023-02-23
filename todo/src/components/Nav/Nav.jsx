import React, { useContext } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Nav.module.css';
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";

// all, active, completed 부분 출력되고 클릭하면 필터링 되는 기능
// react-icons에서 sun, moon 컴포넌트 불러온다음 onclick이 될 경우 상단 부모에 있는
// darkmode가 실행이 되게끔 구성해야함
export default function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className={styles.nav}>
      <ul class={styles.tab}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <FiSun />}
        {darkMode && <HiMoon/>}
      </button>
    </nav>
  );
}

