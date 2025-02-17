import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [nome, setNome] = useState(''); // Estado para armazenar o nome digitado
  const [mensagem, setMensagem] = useState(''); // Estado para armazenar a mensagem a ser exibida

  // Função chamada ao clicar no botão
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`); // Exibe saudação personalizada se o nome foi digitado
    } else {
      setMensagem('Por favor, digite seu nome.'); // Exibe mensagem de erro caso o nome esteja vazio
    }
  };

  return (
    <View style={styles.container}> 
      <Image source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} style={styles.logo} /> {/* Exibe imagem do logo */}

      <Text style={styles.titulo}>Exemplo de App Interativo</Text> {/* Exibe título do app */}

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome} // Atualiza o estado 'nome' conforme o usuário digita
        value={nome} // Vincula o valor do campo ao estado 'nome'
      />

      <Button title="Enviar" onPress={lidarComClique} /> {/* Botão para disparar a função lidarComClique */}

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text> {/* Texto dentro de um botão customizado */}
      </TouchableOpacity>

      <Text style={styles.mensagem}>{mensagem}</Text> {/* Exibe a mensagem gerada após clicar */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
