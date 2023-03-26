import { useDispatch, useSelector } from 'react-redux';
import { titleNewAC } from '../../../store/todos/actions';
import { getTitle } from '../../../store/todos/selectors';
import InputText from '../../UI/Input/InputText';

export default function FormTitle() {
  const title = useSelector(getTitle);
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    console.log(e.target.value);
    dispatch(titleNewAC(e.target.value));
  };
  return <InputText type="text" value={title} onChange={handleTitle}></InputText>;
}
