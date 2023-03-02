import React from 'react';
import styles from './Todo.module.css';
import { HiTrash } from 'react-icons/hi';

// li 부분 컴포넌트 생성
// 체크박스 input 부분, todo content 부분, 휴지통 icon 부분
export default function Todo({ todo, onStateChange, onDelete }) {
  const { id, text, status } = todo;
  // handleDelete 함수가 실행이 되고 list가 없어져야함
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onStateChange({ ...todo, status });
  }
  const handleDelete = (e) => {
    console.log(e.target.value);
    const delTodo = e.target.value;
    onDelete({ ...todo, delTodo });
  }
  return (
    <li className={styles.todoLi}>
      <input 
      type="checkbox"
      id={id}
      checked={status === 'completed'}
      onChange={handleChange}
      />
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
      <span className={styles.del}>
        <button onClick={handleDelete}>
          <HiTrash className={styles.delicon}/>
        </button>
      </span>
    </li>
  );
}

