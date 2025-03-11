import React from 'react';
import './App.css';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

function App() {
  return (
    <div className="App">
      <h2>Componentes baseado em função:</h2>
      <OlaPerfilFuncao
        nome="Bruno Duran"
        endereco="saocarlos1234"
        telefone="(11) 98765-4321"
      />

      <h2>Componente baseado em classe:</h2>
      <OlaPerfilClasse
        nome="Heloisa"
        endereco="avenida 1234"
        telefone="(21) 12345-6789"
      />
    </div>
  );
}

export default App;
