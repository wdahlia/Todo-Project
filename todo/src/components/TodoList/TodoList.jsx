import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

// ul 부분의 컴포넌트 작성
// TodoList 컴포넌트 내에 Todo 컴포넌트 배치 
export default function TodoList() {
  // todolist의 경우 add 되는 친구들을 useState 상태 변경 시켜주어야함
  const [todos, setTodos] = useState(() => readTodo());
  const handleAdd = (todo) => {
    // console.log(todo);
    setTodos([...todos, todo]);
    // console.log(todos);
    // input에 submit 된 값을 받아와서 그 인자는 todo, todo리스트를 업데이트 하는 로직 작성
  }
  // todo의 목록들이 localStorage에 저장되어야 하고 렌더링 될때마다, 원래 있던 todos를 보여줘야함
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <ul>
          {todos.map((item) => (
            <Todo 
            todo={item}
            key={item.id}/>
          ))}
        </ul>
      </article>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

function readTodo() {
  const todos = localStorage.getItem('todos');
  // localstorage에서 todos아이템을 읽어오고
  // todos가 있다면 json으로 todos를 뱉어주고 아니면 빈 배열을 뱉어주기
  return todos ? JSON.parse(todos) : [];
}