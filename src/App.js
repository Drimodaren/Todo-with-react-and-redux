import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import MainCounter from './pages/MainCounter';
import TodoItemDetails from './pages/TodoItemDetails';
import { Todolist } from './pages/Todolist/Index';
import { initialredux } from './store';

const router = createBrowserRouter([{
  element:<Layout/>,
  children: [{
    path: '/',
    element: <Todolist/>
  },
{
  path:'counter',
  element:<MainCounter/>
},
{
  path:'todos/:id',
  element:<TodoItemDetails/>
}
]
}])
function App() {
  return (
    <Provider store={initialredux}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
