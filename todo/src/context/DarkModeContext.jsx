import { createContext, useContext, useEffect, useState } from "react";

// dark mode context 생성, 화면 전체적으로 nav바에 있는 아이콘을 토글했을때,
// 전체적인 모드 전환 + css class를 html에 적용하는 방식으로 구성

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    changeMode(!darkMode);
  }

  // useEffect 사용해서 app컴포넌트 처음 마운트 될 때, dark모드라면 dark 모드 설정 해주어야함
  useEffect(() => {
    // localStorage.theme이 dark이거나, 윈도우 운영체제 내부가 darkmode인 경우 dark모드로 class를 추가해주고 localstorage에도 dark를 저장해주어야함
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    changeMode(isDark);
  }, [])

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
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
// 자식 컴포넌트들에 전달하기 위해 useDarkMode라는 변수를 선언해주고 이는 useContext를 담고있음