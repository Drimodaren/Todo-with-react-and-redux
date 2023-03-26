// actionCreater() - функция которая возвращает объект action

import { addNewTodo, deleteTodoById, getAllTodos, updateTodoById } from '../../services/todos';
import {
  ADD_NEWTODO,
  DATENEW_TODO,
  DELETE_TODO,
  ERRORS_TODO,
  SET_LOADED,
  SET_LOADING,
  SET_TODOS,
  TITLENEW_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  USERID_TODO,
} from './actionTypes';
import { getTodoByID } from './selectors';

export const setTodosAC = (todos) => {
  return {
    type: SET_TODOS,
    todos,
  };
};// actionCreater функция хелпер создающая объект action

export const setLoadingAC = () => {
  return {
    type: SET_LOADING,
  };
};

export const setLoadedAC = () => {
  return {
    type: SET_LOADED,
  };
};
export const deleteTodoAC = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
export const addNewTodoAC = (todo) => {
  return {
    type: ADD_NEWTODO,
    todo,
  };
};

export const toggleTodoAC = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const updateTodoAC = (updatedTodo) => {
  return {
    type: UPDATE_TODO,
    updatedTodo,
  };
};

export const errorAC = (message) => {
  return {
    type: ERRORS_TODO,
    message,
  };
};
export const titleNewAC = (title) => {
  return {
    type: TITLENEW_TODO,
    title,
  };
};
export const userIdAC = (userId) => {
  return {
    type: USERID_TODO,
    userId,
  };}
  export const dateAC = (date) => {
    return {
      type: DATENEW_TODO,
      date,
    };}

export const asyncThunk =
  (cb, ...args) =>
  async (dispatch, getState) => {
    dispatch(setLoadingAC());
    try {
      await dispatch(cb(...args));
    } catch (e) {
      dispatch(errorAC(e.message));
    } finally {
      dispatch(setLoadedAC());
    }
  };

const _loadTodos = () => async (dispatch) => {
  const todos = await getAllTodos();
  dispatch(setTodosAC(todos));
};

export const loadTodos = () => async (dispatch, getState) => {
  dispatch(asyncThunk(_loadTodos));
};

const _addTodos = (newPartialTodo) => async (dispatch) => {
  const newCreatedTodo = await addNewTodo(newPartialTodo);
  dispatch(addNewTodoAC(newCreatedTodo));
};

export const addTodos = (newPartialTodo) => async (dispatch, getState) => {
  dispatch(asyncThunk(_addTodos, newPartialTodo));
};

const _deleteTodos = (id) => async (dispatch) => {
  const deleteID = await deleteTodoById(id);
  dispatch(deleteTodoAC(deleteID));
};

export const deleteTodos = (id) => async (dispatch, getState) => {
  dispatch(asyncThunk(_deleteTodos, id));
};

const _toggleTodos = (id) => async (dispatch, getState) => {
  const todo = getTodoByID(getState(),id);
  const toggledTodo = { ...todo, completed: !todo.completed };
  const updatedTodo = await updateTodoById(id, toggledTodo);
  dispatch(updateTodoAC(updatedTodo));
};

export const toggleTodos = (id) => async (dispatch, getState) => {
  dispatch(asyncThunk(_toggleTodos, id));
};
