import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteTodos, toggleTodos } from '../../../store/todos/actions';
import { USERS } from '../../../store/todos/constans';

function TodoItemInner({ id, title, complited, userId, date }) {
  const dispatch = useDispatch();
  console.log('render todoItem', title);
  const handleToggle = () => {
    dispatch(toggleTodos(id));
  };
  const handleDelete = () => {
    dispatch(deleteTodos(id));
  };
  return (
    <div className="todoItem">
      <div>
        <input type="checkbox" name="" id="" checked={complited} onChange={handleToggle} />
        <NavLink to={`todos/${id}`}>{title}</NavLink>-<div className="userId">{USERS[userId]}</div>-<div>{date}</div>
      </div>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
export const TodoItem = memo(TodoItemInner);
