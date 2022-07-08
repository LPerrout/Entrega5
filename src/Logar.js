import React from "react";
import Labellogin from './components/Labellogin';
import Labelsenha from './components/Labelsenha';
import './App.css';

function Logar() {
    return(
      <div className='todo-logar'>
        <h1>Login</h1>
        <Labellogin/>
        <Labelsenha/>
        <button className='todo-button2'>esqueceu sua senha?</button>
        <button className='todo-button2'>Cadastre-se</button>
    </div>
        );
}

export default Logar;