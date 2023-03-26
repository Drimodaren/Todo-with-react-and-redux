const delay = (delay = 500) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
const TODOS_LS = 'todos';
const getTodosFromLs = () => {
  const todos = localStorage.getItem(TODOS_LS);
  if (!todos) {
    return [];
  }
  return JSON.parse(todos);
};
const setTodosToLs = (todos = []) => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
};
export const getAllTodos = async () => {
  await delay();
  return getTodosFromLs();
};
export const addNewTodo = async (newPartialTodo) => {
  const newTodo = {
    ...newPartialTodo,
    id: Date.now(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  };
  const oldTodos = getTodosFromLs();
  const newTodos = [...oldTodos, newTodo];
  setTodosToLs(newTodos);
  await delay();
  return newTodo;
};
export const updateTodoById = async (id, newTodo) => {
  await delay();
  const oldTodos = getTodosFromLs();
  const findTodo = oldTodos.find((el) => el.id === id);
  if (!findTodo) {
    return new Error('404 not found');
  }
  const updatedTodo = { ...findTodo, ...newTodo, updatedAt: new Date().toDateString() };
  const newTodos = oldTodos.map((el) => {
    if (el.id === id) {
      return updatedTodo;
    } else {
      return el;
    }
  });
  setTodosToLs(newTodos);
  return updatedTodo;
};
export const deleteTodoById = async (id) => {
  await delay();
  const oldTodos = getTodosFromLs();
  const findTodo = oldTodos.find((el) => el.id === id);
  if (!findTodo) {
    return new Error('404 not found');
  }
  const newTodos = oldTodos.filter((el) => el.id !== id);
  setTodosToLs(newTodos);
  return id;
};
