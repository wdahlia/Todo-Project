import React, { useState } from 'react';
import styles from './AddTodo.module.css';
import { v4 as uuidv4 } from 'uuid';

// input text에 todo 추가해서 submit 하는 부분
// add를 하는 default 값은 active 상태로 들어가게 되는 것
// onAdd를 prop 인자로 받아옴 이는 TodoList에서 받아 오는 것
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleValue = (e) => {
    // 즉 value값의 변화 인자를 setText 안에 넣어주어야 하므로 로직 작성
    console.log(e.target.value);
    // 입력되는 값들이 value 안에 들어가짐
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // submit 기본 동작 막아두기
    // console.log(uuidv4(), text);
    onAdd({ id: uuidv4(), text, status: 'active'});
    // uuidv4 사용 2.71 * 10^18 개의 UUID를 생성했을 때 최소 1개가 중복(충돌) 될 확률이 약 50%
    // 즉 값이 중복될 가능성이 현저히 적음 // 고유 코드로 사용 가능
    // id값, text, status를 저장해서 상위 컴포넌트에 던져주게 된다
    setText(''); // setText를 비워준다
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
      type="text" 
      placeholder="할 일을 입력하세요." 
      className={styles.input}
      value={text}
      onChange={handleValue}
      spellCheck="false"/>
      <button className={styles.btn}></button>
    </form>
  );
}

