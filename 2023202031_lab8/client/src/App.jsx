import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Axios  from 'axios';
import './App.css';
import UserContext from './context/UserContext.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import CreateTodo from './Components/CreateTodo.jsx';
import CompleteTodo from './Components/CompleteTodo.jsx';
import PendingTodo from './Components/PendingTodo.jsx';

function App() {
  Axios.defaults.withCredentials = true;

  const [userName, setUserName] = useState('');
  return (

    <div>
      <UserContext.Provider value={useMemo(() => ({userName, setUserName}),[userName])}>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/createTodo' element={<CreateTodo />}/>
          <Route path='/completeTodo' element={<CompleteTodo />}/>
          <Route path='/pendingTodo' element={<PendingTodo />}/>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
