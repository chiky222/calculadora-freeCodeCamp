import './App.css';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import btmLogo from './imagenes/btm.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    if (val === '+' | val === '-' | val === '/' | val === '*') {
      if (input.indexOf('+') === -1 & input.indexOf('-') === -1 & input.indexOf('/') === -1 & input.indexOf('*') === -1 & input[1] !== '-' & input[2] !== '-' & input[3] !== '-') {
        for (let i = 1; i < 10; i++) {
          if (input[i] === '-') {
            return false;
          }
        }
        setInput(input + val);
      } else if (input[0] === '-' & input.length === 1) {
        alert('No puede introducir dos signos seguidos');
      } else if (input.indexOf('+') === -1 & input.indexOf('-') === 0 & input.indexOf('/') === -1 & input.indexOf('*') === -1 & input[1] !== '-' & input[2] !== '-' & input[3] !== '-') {
        setInput(input + val);
      } else {
        alert('Ya existe un signo en la operación');
      }
    } else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(String(evaluate(input)));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={btmLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
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
