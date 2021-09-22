// import React, { useState} from 'react';
import './App.css';
import { TabelaContagem } from './TabelaContagem';

const digitacao = [
  'PRIMEIRA FRASE',
  'Segundo texto digitado',
  'Texto número 3',
  'Quarta frase digitada',
  'Quinto e último texto digitado',
];

function App() {
  // const [frase, setFrase] = useState([]);
  // const [frases, setFrases] = useState([]);
  return (
    <div className="App">
      <h2>
        TABELA CONTAGEM VOGAIS E CONSOANTES
      </h2>
      <p>
        <input type="text" />
        <button>Inserir</button>
      </p>
      <br />
      <br />
      <TabelaContagem frases={digitacao} />
    </div>
  );
}

export default App;
