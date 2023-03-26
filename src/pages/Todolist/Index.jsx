import React, { useEffect } from 'react';
import {Spinner} from '../../components/UI/Spinner/index'
import { TodoItem } from './TodoItem';
import { AddNewTodo } from './AddNewTodo';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../../store/todos/actions';
import {
  getAllTodos,
  getErrorTodos,
  getLoadingTodos,
  getTodoByID,
} from '../../store/todos/selectors';

export const LOADING_STATE = { NEVER: 'Never', LOADING: 'Loading', LOADED: 'Loaded' };

export function Todolist() {
  const dispatch = useDispatch();
  const todos = useSelector(getAllTodos);
  const todoIdTodo1 = useSelector((state) => getTodoByID(state, 1678961937204));
  console.log(todoIdTodo1);
  const loading = useSelector(getLoadingTodos);
  const error = useSelector(getErrorTodos);
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  if (loading === LOADING_STATE.LOADING) {
    return <Spinner />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="todoList">
      <AddNewTodo />
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          complited={item.completed}
          userId={item.userId}
          date = {item.date}
        />
      ))}
    </div>
  );
}
