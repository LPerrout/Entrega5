import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Logar from './Logar';
import Entrega from './components/EntregaList';
import Listatotal from './Listatotal';
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <div className='todo-link'>
        <Link to = '/'> <button className = 'todo-button'>Home</button></Link>
        <Link to = '/login'><button className = 'todo-button'>Login</button></Link>
      </div>
      
      <main>
        <Routes>
        <Route path='/' element={<Listatotal/>} />

        <Route path='/login' element={<Logar/>} />


        </Routes>
      </main>
    </>
  );
}

export default App;
