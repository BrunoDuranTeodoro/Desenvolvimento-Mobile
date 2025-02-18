import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar o estado
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native'; // Importa componentes necessários do React Native
import logoX from './assets/NativeLogo.png'; // Importa a imagem do logo

const App = () => {
  // Estado para armazenar o texto do input
  const [text, setText] = useState('');
  // Estado para armazenar os itens que serão exibidos na lista
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  // Função que exibe um alerta quando o botão é pressionado
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  // Função que adiciona um novo item à lista
  const addItem = () => {
    if (text.trim() !== '') {
      // Verifica se o texto não está vazio
      setItems([...items, { id: Date.now().toString(), name: text }]); // Adiciona o novo item
      setText(''); // Limpa o campo de texto após adicionar
    }
  };

  return (
    <ScrollView style={styles.container}>
      {' '}
      {/* ScrollView para permitir rolar o conteúdo */}
      <View style={styles.header}>
        {' '}
        {/* Cabeçalho com a imagem e título */}
        <Image source={logoX} style={styles.image} /> {/* Exibe o logo */}
        <Text style={styles.title}>Exemplo de App React Native</Text>{' '}
        {/* Título */}
      </View>
      <TextInput
        style={styles.input} // Estilo do campo de input
        placeholder="Digite algo" // Texto de placeholder
        value={text} // Valor do input
        onChangeText={setText} // Atualiza o estado do texto
      />
      <Button title="Adicionar Item" onPress={addItem} />{' '}
      {/* Botão para adicionar item à lista */}
      <FlatList
        data={items} // Dados da lista
        renderItem={(
          { item } // Renderiza cada item na lista
        ) => (
          <View style={styles.item}>
            <Text>{item.name}</Text> {/* Exibe o nome do item */}
          </View>
        )}
        keyExtractor={(item) => item.id} // Chave única para cada item
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        {' '}
        {/* Botão customizado */}
        <Text style={styles.buttonText}>Pressione-me</Text>{' '}
        {/* Texto do botão */}
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center', // Centraliza os itens dentro da View
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee', // Cor de fundo dos itens
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Cor da linha divisória entre itens
  },
  button: {
    backgroundColor: 'blue', // Cor do fundo do botão
    padding: 10,
    borderRadius: 5, // Bordas arredondadas
    alignItems: 'center', // Centraliza o texto dentro do botão
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
