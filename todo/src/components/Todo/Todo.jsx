import React from 'react';
import styles from './Todo.module.css';
import { FaTrash } from "react-icons/fa";

// li 부분 컴포넌트 생성
// 체크박스 input 부분, todo content 부분, 휴지통 icon 부분
export default function Todo({ todo }) {
  const { id, text, status } = todo;
  return (
    <li className={styles.todoLi}>
      <input 
      type="checkbox"
      id={id}
      checked={status === 'completed'} />
      <label htmlFor={id} className={styles.label}>{text}</label>
      <span className={styles.del}>
        <FaTrash />
      </span>
    </li>
  );
}

