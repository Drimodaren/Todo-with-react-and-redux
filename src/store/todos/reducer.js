import {
  ADD_NEWTODO,
  DELETE_TODO,
  ERRORS_TODO,
  SET_LOADED,
  SET_LOADING,
  SET_TODOS,
  TITLENEW_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  USERID_TODO,
  DATENEW_TODO,
} from './actionTypes';
import { LOADING_STATE } from './constans';
import { INITIAL_STATE } from './initialState';

// Reducer это чистые функции (прочитать) принимает два аргумента state,action
// state - аналог prev у useState, т.е. текущее значение у store
// action - специальный объект с обязательным полем type
// при инициальизации приложения в action.type===@@init
// state при втором dispatch попадает globalStorage.todos - это данные предыдущего todos
export const todosReducer = (state = INITIAL_STATE, action) => {
  console.log('todosreducer', action);
  console.log(state);
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: LOADING_STATE.LOADING,
      };
    case SET_LOADED:
      return {
        ...state,
        loading: LOADING_STATE.LOADED,
      };
    case ADD_NEWTODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id !== action.id) {
            return el;
          } else {
            return {
              ...el,
              completed: !el.completed,
            };
          }
        }),
      };
    case ERRORS_TODO:
      return {
        ...state,
        error: action.message,
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id !== action.updatedTodo.id) {
            return el;
          } else {
            return action.updatedTodo;
          }
        }),
      };

    case TITLENEW_TODO:
      console.error(action);
      return {
        ...state,
        form: { ...state.form, title: action.title },
      };
    case USERID_TODO:
      console.error(action);
      return {
        ...state,
        form: { ...state.form, userId: action.userId },
      };

    case DATENEW_TODO:
      console.error(action);
      return {
        ...state,
        form: { ...state.form, date: action.date },
      };

    default:
      return state;
  }
};
