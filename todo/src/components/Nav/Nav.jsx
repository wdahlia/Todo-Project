import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Nav.module.css';
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";

// all, active, completed 부분 출력되고 클릭하면 필터링 되는 기능
// react-icons에서 sun, moon 컴포넌트 불러온다음 onclick이 될 경우 상단 부모에 있는
// darkmode가 실행이 되게끔 구성해야함

// 클릭이 된 button의 경우, style을 hover했을때 이미지 그대로 만들어줘야함
export default function Nav({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className={styles.nav}>
      <ul>
        {filters.map((tab, index) => (
            <li key={index}>
              <button
              className={`${styles.btn} ${ filter === tab && styles.filter }`}
              disabled={ filter === tab }
              onClick={() => onFilterChange(tab)}>
                {tab}
              </button>
            </li>
        ))}
      </ul>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <FiSun />}
        {darkMode && <HiMoon/>}
      </button>
    </nav>
  );
}

