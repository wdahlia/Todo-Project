import React from 'react';
import styles from './AddTodo.module.css';

// input text에 todo 추가해서 submit 하는 부분
export default function AddTodo() {
  function submitTodo() {

  }
  return (
    <form onSubmit={submitTodo} className={styles.form}>
      <input type="text" placeholder="할 일을 입력하세요." className={styles.input}/>
      <button className={styles.btn}></button>
    </form>
  );
}

