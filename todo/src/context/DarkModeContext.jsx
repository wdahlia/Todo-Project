import { useContext } from "react";

// dark mode context 생성, 화면 전체적으로 nav바에 있는 아이콘을 토글했을때,
// 전체적인 모드 전환 + css class를 html에 적용하는 방식으로 구성

const DarkModeContext = useContext();

export function DarkModeProvider({ children }) {
  return(
    <DarkModeContext.Provider>
      {children}
    </DarkModeContext.Provider>
  )
}