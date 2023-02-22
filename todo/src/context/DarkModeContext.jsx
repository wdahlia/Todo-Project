import { createContext, useContext, useState } from "react";

// dark mode context 생성, 화면 전체적으로 nav바에 있는 아이콘을 토글했을때,
// 전체적인 모드 전환 + css class를 html에 적용하는 방식으로 구성

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    changeMode(!darkMode);
  }
  // dark mode의 실행 조건, 브라우저가 다크모드인 경우, 내가 토글한 아이콘의 테마가 darkmode일 경우
  return(
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function changeMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
// 자식 컴포넌트들에 전달하기 위해 useDarkMode라는 변수를 선언해주고 이는 useContext를 담고있음