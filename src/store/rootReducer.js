import { combineReducers } from '@reduxjs/toolkit';
import { LABEL_COUNTER } from './counter/constants';
import { counterReducer } from './counter/reducer';
import { todosReducer } from './todos/reducer';

//через dispatch мы меняем значение action и заставляем срабатывать case

const avc = combineReducers({
  goo: () => {
    return 1;
  },
  hoo: () => {
    return 2;
  },
});
export const rootReducer = combineReducers({
  todos: todosReducer, //справа чистые функции
  mainCounter: counterReducer(LABEL_COUNTER.main),
  footerCounter: counterReducer(LABEL_COUNTER.footer),
  headerCounter: counterReducer(LABEL_COUNTER.header),
  fooo: avc,
});
