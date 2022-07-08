import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([
          {id: Math.floor(Math.random() * 10000),
            text: "Lectina"},
          {id: Math.floor(Math.random() * 10000),
            text: "Estearoil 2-lactil lactato de sodio"},
          {id: Math.floor(Math.random() * 10000),
            text: "Dióxido de sílicio"},
          {id: Math.floor(Math.random() * 10000),
            text: "Ácido sórbico e seus derivados"},
          {id: Math.floor(Math.random() * 10000),
              text: "Açucar mascavo"},
          {id: Math.floor(Math.random() * 10000),
              text: "Açucar branco"},
          {id: Math.floor(Math.random() * 10000),
              text: "farinha"},
          {id: Math.floor(Math.random() * 10000),
                text: "ovos"},
          {id: Math.floor(Math.random() * 10000),
                text: "sal"},
          {id: Math.floor(Math.random() * 10000),
                text: "gotas de chocolate"},
          {id: Math.floor(Math.random() * 10000),
                  text: "essência de baunilha"},
          {id: Math.floor(Math.random() * 10000),
                    text: "fermento em pó"},
          
          
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
      <h1>Lista de Produtos para loja</h1>
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

export default TodoList;
