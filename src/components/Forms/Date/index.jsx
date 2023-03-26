import { useDispatch, useSelector } from 'react-redux';
import { dateAC } from '../../../store/todos/actions';
import { getDate } from '../../../store/todos/selectors';
import InputDate from '../../UI/Input/InputDate';

export default function NewDate() {
  const dispatch = useDispatch();
  const date = useSelector(getDate);

   const handleChangeDate = (e) => {
    dispatch(dateAC(e.target.value));
  };
  return (
    <InputDate value={date} onChange={handleChangeDate}/>
  )
}
