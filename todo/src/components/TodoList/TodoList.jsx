import React from 'react';
import AddTodo from '../AddTodo/AddTodo';


// ul 부분의 컴포넌트 작성
// TodoList 컴포넌트 내에 Todo 컴포넌트 배치 
export default function TodoList() {
  const handleAdd = (todo) => {
    // console.log(todo);
    // input에 submit 된 값을 받아와서 그 인자는 todo, todo리스트를 업데이트 하는 로직 작성
  }
  return (
    <>
      <Todo />
      <AddTodo onAdd={handleAdd} />
    </>
  );
}

