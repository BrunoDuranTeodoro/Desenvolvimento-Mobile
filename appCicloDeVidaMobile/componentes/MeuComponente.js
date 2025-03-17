import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

class MeuComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagem: 'Ola!',
      contador: 0,
      exibirComponente: true,
      textoInput: '',  // Estado para armazenar o texto inserido
      exibirInput: false,  // Controla a visibilidade do campo de texto
    };
    console.log('constructor: Componente montado!');
  }

  componentDidMount() {
    console.log('componentDidMount: Componente montado!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Componente atualizado: ', prevState, this.state);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Componente desmontado');
  }

  alterarMensagem = () => {
    console.log('Botão "Alterar Mensagem" foi apertado!');
    this.setState({ exibirInput: true }); // Exibe o campo de entrada de texto
  };

  incrementarContador = () => {
    console.log('Botão "Incrementar Contador" foi apertado!');
    this.setState({ contador: this.state.contador + 1 });
  };

  exibirOuOcultarComponente = () => {
    console.log('Botão "Exibir/Ocultar Componente" foi apertado!');
    this.setState({ exibirComponente: !this.state.exibirComponente });
  };

  enviarMensagem = () => {
    console.log('Botão "Enviar Mensagem" foi apertado!');
    console.log('Mensagem enviada:', this.state.textoInput); // Envia o texto inserido
    this.setState({ exibirInput: false, textoInput: '' }); // Fecha o campo e limpa o texto
  };

  handleInputChange = (text) => {
    this.setState({ textoInput: text });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.contador === nextState.contador) {
      console.log('shouldComponentUpdate: Contador não mudou, ignorando renderização');
      return false;
    }
    console.log('shouldComponentUpdate: Contador mudou, renderizando');
    return true;
  }

  render() {
    if (!this.state.exibirComponente) {
      console.log('render: para não renderizar se exibirComponente.');
      return null;
    }

    console.log('render: para renderizar se exibirComponente.');

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.mensagem}</Text>
        <Text style={styles.text}>Contador: {this.state.contador}</Text>

        <View style={styles.button}>
          <Button titlee="Alterar Mensagem" onPress={this.alterarMensagem} />
        </View>

        {this.state.exibirInput && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite sua mensagem"
              value={this.state.textoInput}
              onChangeText={this.handleInputChange}
            />
          </View>
        )}

        <View style={styles.button}>
          <Button title="Enviar Mensagem" onPress={this.enviarMensagem} />
        </View>

        <View style={styles.button}>
          <Button title="Incrementar Contador" onPress={this.incrementarContador} />
        </View>

        <View style={styles.button}>
          <Button title="Exibir/Ocultar Componente" onPress={this.exibirOuOcultarComponente} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  buttonContainer: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default MeuComponente;
