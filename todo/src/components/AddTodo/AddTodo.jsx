import React, { useState } from 'react';
import styles from './AddTodo.module.css';

// input text에 todo 추가해서 submit 하는 부분
// add를 하는 default 값은 active 상태로 들어가게 되는 것
export default function AddTodo({ add}) {
  const [text, setText] = useState('');
  const handleValue = (e) => {
    // 즉 value값의 변화 인자를 setText 안에 넣어주어야 하므로 로직 작성
    console.log(e.target.value);
    // 입력되는 값들이 value 안에 들어가짐
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
      type="text" 
      placeholder="할 일을 입력하세요." 
      className={styles.input}
      value={text}
      onChange={handleValue}/>
      <button className={styles.btn}></button>
    </form>
  );
}

