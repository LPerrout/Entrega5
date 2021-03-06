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
        </>
      ) : (
        <>
          <input
            placeholder='Senha'
            value={input}
            onChange={handleChange}
            name='password'
            className='todo-input'
            ref={inputRef}
            type = 'password'
          />
        </>
      )}
    </form>
  );
}

export default TodoForm;
