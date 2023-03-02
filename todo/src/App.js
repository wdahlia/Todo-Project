import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

// 상위에서 props로 filters를 전달 해주어야함, TodoList 출력 부분과 Nav에 나와야하기 때문
const filters = ['all', 'active', 'completed'];
// darkmode, lightmode 변경 될 container 부분
function App() {
  const [filter, setFilter] = useState(filters[0]);
  console.log(filter);
  // 기본값은 All로 지정
  // 가장 상위 App에서 밑으로 뿌려주고 있음, 즉 Nav에서 선택하면 filterChange 된 값을 setFilter에 저장해주고
  // 그 값을 TodoList에서 뿌려주는 식으로 하기
  return (
    <DarkModeProvider>
      <Nav filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
