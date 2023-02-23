import './App.css';
import Nav from './components/Nav/Nav';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

// darkmode, lightmode 변경 될 container 부분
function App() {
  return (
    <DarkModeProvider>
      <Nav/>
      <TodoList/>
    </DarkModeProvider>
  );
}

export default App;
