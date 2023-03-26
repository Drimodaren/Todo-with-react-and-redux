import { useDispatch, useSelector } from 'react-redux';
import { addTodos, dateAC, titleNewAC, userIdAC } from '../../../store/todos/actions';
import { getDate, getTitle, getUserId, isButtonDisable } from '../../../store/todos/selectors';
import AddNewTodoButton from '../../UI/Button/AddNewTodoButton';

export default function AddNewTodoForm() {
  const dispatch = useDispatch();
  const title = useSelector(getTitle);
  const userId = useSelector(getUserId);
  const date = useSelector(getDate);
  const disabled = useSelector(isButtonDisable);

  const handleAddNewTodoID = async () => {
    if (title.trim() !== '') {
      const newPartialTodo = { title, completed: false, userId, date };
      dispatch(addTodos(newPartialTodo));
      dispatch(titleNewAC(''));
      dispatch(userIdAC(null));
      dispatch(dateAC(null));
    }
  };

  return (
    <AddNewTodoButton disabled={disabled} onClick={handleAddNewTodoID}>
      Add new Todo
    </AddNewTodoButton>
  );
}
