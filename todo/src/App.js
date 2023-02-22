import logo from './logo.svg';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';

// darkmode, lightmode 변경 될 container 부분
function App() {
  return (
    <DarkModeProvider>
      
    </DarkModeProvider>
  );
}

export default App;
