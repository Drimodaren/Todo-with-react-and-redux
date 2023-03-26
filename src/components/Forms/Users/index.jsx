
import { useDispatch, useSelector } from 'react-redux';
import { userIdAC } from '../../../store/todos/actions';
import { getUserId } from '../../../store/todos/selectors';
import SelectUser from '../../UI/Select/SelectUser';

export default function Users() {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
   const handleChangeUserId = (e) => {
    dispatch(userIdAC(e.target.value));
  };
  return (
    <SelectUser value={userId ?? ''} onChange={handleChangeUserId}/>
  )
}
