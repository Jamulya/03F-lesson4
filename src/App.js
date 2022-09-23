import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import store from './redux';
import {changeName, addTask, deleteTask, doImportant, doDone} from './redux/reducers/tasks'

import {useState} from 'react'

function App() {

  const dispatch = useDispatch()
  const title = useSelector((store) => store.tasks.title)
  const todos = useSelector((store) => store.tasks.todos)

  const [task, setTask] = useState('')


  return (
    <div className="App">
      <div>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <button type='button' onClick={() => {
          dispatch(addTask(task))
          setTask('')
          }}>добавить</button>
      </div>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id} style={{margin: '20px 0', color: item.isImportant ? 'red' : '', textDecoration: item.isDone  ? 'line-through' : ''}}>{item.title} 
            <button style={{margin: '0 40px'}} type='button' onClick={() => dispatch(deleteTask(item.id))}>удалить</button>
            <button style={{margin: '0 40px'}} type='button' onClick={() => dispatch(doImportant(item.id))}>важный</button>
            <button style={{margin: '0 40px'}} type='button' onClick={() => dispatch(doDone(item.id))}>выполнено</button>
            </li>
          ))

        }
        
      </ul>
      <div>
        <input type="search"/>
        <button>найти</button>
      </div>
    {/* <button type='button' onClick={() => dispatch(changeName())}>изменить имя</button> */}
    </div>
  );
}

export default App;
