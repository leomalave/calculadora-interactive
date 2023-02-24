import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');


  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
    setInput(evaluate(input));
    } else {
      alert ("Por favor ingrese valores para realizar los calculos")
    }
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />         
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton ManejarClic={agregarInput}>1</Boton>
          <Boton ManejarClic={agregarInput}>2</Boton>
          <Boton ManejarClic={agregarInput}>3</Boton>
          <Boton ManejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton ManejarClic={agregarInput}>4</Boton>
          <Boton ManejarClic={agregarInput}>5</Boton>
          <Boton ManejarClic={agregarInput}>6</Boton>
          <Boton ManejarClic={agregarInput}>-</Boton>
        </div>  
        <div className='fila'>
          <Boton ManejarClic={agregarInput}>7</Boton>
          <Boton ManejarClic={agregarInput}>8</Boton>
          <Boton ManejarClic={agregarInput}>9</Boton>
          <Boton ManejarClic={agregarInput}>*</Boton>
        </div>  
        <div className='fila'>
          <Boton ManejarClic={calcularResultado}>=</Boton>
          <Boton ManejarClic={agregarInput}>0</Boton>
          <Boton ManejarClic={agregarInput}>.</Boton>
          <Boton ManejarClic={agregarInput}>/</Boton>
        </div>  
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
