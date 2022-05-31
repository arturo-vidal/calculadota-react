import './App.css';
import logofcc from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Botonclear from './componentes/Boton-clear';
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {
  
  const [input, setInput]= useState('');

  const agregarInput=(valor)=>{
    setInput(input + valor);
  };

  const calcularResultado= ()=>{
    if(input){
    setInput(evaluate(input));
    }else{
      setInput('Sin valores');
    }
  };
  
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className='logo-fcc' alt='logo de fcc' src={logofcc}/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Botonclear manejarClear={ ()=>setInput('')}>Clear</Botonclear>
        </div>
      </div>
    </div>
  );
}

export default App;
