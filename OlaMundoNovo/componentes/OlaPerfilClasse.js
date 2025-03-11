import React, { Component } from 'react';

class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;
    
    return (
      <div>
        <h1>Olá, {nome}!</h1>
        <p><strong>Endereço:</strong> {endereco}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
      </div>
    );
  }
}

export default OlaPerfilClasse;
