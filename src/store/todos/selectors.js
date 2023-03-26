export const getAllTodos = (state) => state.todos.todos;
export const getTodoByID = (state, id) => {
  return getAllTodos(state).find((el) => +id == el.id);
};
export const getLoadingTodos = (state) => state.todos.loading;
export const getErrorTodos = (state) => state.todos.error;
export const getTitle = (state) => state.todos.form.title;
export const getUserId = (state) => state.todos.form.userId;
export const getDate = (state) => state.todos.form.date;
export const isButtonDisable = (state) => {
  const title = getTitle(state);
  const userId = getUserId(state);
  const date = getDate(state);
  return title.trim() === '' || !userId || !date;
};
