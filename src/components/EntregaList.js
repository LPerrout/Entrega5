import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function Entrega() {
  const [todos, setTodos] = useState([
            {id: Math.floor(Math.random() * 10000),
            text: "Cliente 1|endereço|pedido"},
            {id: Math.floor(Math.random() * 10000),
                text: "Cliente 2|endereço|pedido"},
            {id: Math.floor(Math.random() * 10000),
                text: "Cliente 3|endereço|pedido"},
          
  ]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Lista de Entregas da loja</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default Entrega;
