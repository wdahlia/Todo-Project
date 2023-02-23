import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Nav from './components/Nav/Nav';
import { DarkModeProvider } from './context/DarkModeContext';

// darkmode, lightmode 변경 될 container 부분
function App() {
  return (
    <DarkModeProvider>
      <Nav/>
      <AddTodo/>
    </DarkModeProvider>
  );
}

export default App;
