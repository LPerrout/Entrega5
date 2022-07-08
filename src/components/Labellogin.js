import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button className='todo-button edit'>
            Logar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Login'
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button  className='todo-button'>
            Logar
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
