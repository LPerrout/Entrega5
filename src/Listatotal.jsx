import React from "react";
import Entrega from "./components/EntregaList";
import TodoList from "./components/TodoList";
import './App.css';

function Listatotal() {
    return(  <div>
      <div className='todo-app'>
    <TodoList/>
  </div>
    <div className='todo-app'>
    <Entrega/>
    </div>
    </div>);
}

export default Listatotal;