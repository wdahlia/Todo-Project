import React from 'react';
import styles from './Todo.module.css';
import { FaTrash } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

// li 부분 컴포넌트 생성
// 체크박스 input 부분, todo content 부분, 휴지통 icon 부분
export default function Todo() {
  // const { id, text, status } = todo;
  // handleDelete 함수가 실행이 되고 list가 없어져야함
  const handleDelete = (e) => {
    console.log(e.target);
  }
  return (
    <li className={styles.todoLi}>
      <input 
      type="checkbox"
      id='input'
      />
      <label htmlFor='input' className={styles.label}>
        <span className={styles.check}>
          <BsCheckLg />
        </span>
        운동하기
      </label>
      <span className={styles.del}>
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
      </span>
    </li>
  );
}

