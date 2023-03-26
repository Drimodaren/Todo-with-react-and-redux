import AddNewTodoForm from '../../../components/Forms/AddNewTodoForm';
import FormTitle from '../../../components/Forms/Title';
import Users from '../../../components/Forms/Users';
import NewDate from '../../../components/Forms/Date';

export function AddNewTodo() {
  return (
    <div>
      <FormTitle />
      <Users />

      <NewDate />
      <AddNewTodoForm />
    </div>
  );
}
