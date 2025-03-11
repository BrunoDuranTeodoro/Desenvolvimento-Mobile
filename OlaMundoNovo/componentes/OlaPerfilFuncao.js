import React from 'react';

const OlaPerfilFuncao = ({ nome, endereco, telefone }) => {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p><strong>Endereço:</strong> {endereco}</p>
      <p><strong>Telefone:</strong> {telefone}</p>
    </div>
  );
};

export default OlaPerfilFuncao;