import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');

  const salvarEquipamento = async () => {
    if (!id || !nome || !local) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const equipamento = { id, nome, local };
    await AsyncStorage.setItem(id, JSON.stringify(equipamento));
    Alert.alert('Equipamento salvo com sucesso');
    limparCampos();
  };

  const carregarEquipamento = async () => {
    const equipamentoStr = await AsyncStorage.getItem(id);
    if (equipamentoStr) {
      const equipamento = JSON.parse(equipamentoStr);
      setNome(equipamento.nome);
      setLocal(equipamento.local);
      Alert.alert('Equipamento carregado');
    } else {
      Alert.alert('Equipamento não encontrado');
    }
  };

  const alterarEquipamento = async () => {
    const existente = await AsyncStorage.getItem(id);
    if (existente) {
      const equipamento = { id, nome, local };
      await AsyncStorage.setItem(id, JSON.stringify(equipamento));
      Alert.alert('Equipamento alterado');
      limparCampos();
    } else {
      Alert.alert('Equipamento não encontrado');
    }
  };

  const removerEquipamento = async () => {
    const existente = await AsyncStorage.getItem(id);
    if (existente) {
      await AsyncStorage.removeItem(id);
      Alert.alert('Equipamento removido');
      limparCampos();
    } else {
      Alert.alert('Equipamento não encontrado');
    }
  };

  const limparCampos = () => {
    setId('');
    setNome('');
    setLocal('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>TechFix - Gerenciamento de Equipamentos</Text>

      <TextInput style={styles.input} placeholder="ID" value={id} onChangeText={setId} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Local de Instalação" value={local} onChangeText={setLocal} />

      <View style={styles.botaoContainer}>
        <Button title="Salvar" onPress={salvarEquipamento} />
        <Button title="Carregar" onPress={carregarEquipamento} />
        <Button title="Alterar" onPress={alterarEquipamento} />
        <Button title="Remover" onPress={removerEquipamento} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700', // Alterado para '700' para mais ênfase, o que é mais comum em títulos
    color: '#333', // Cor escura para boa legibilidade
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12, // Aumentei o padding para um toque mais confortável
    borderRadius: 8, // Cantos mais arredondados
    borderWidth: 1, // Adicionado borda para uma delimitação visual
    borderColor: '#ddd', // Cor suave para a borda
    marginBottom: 12, // Aumentei um pouco o espaçamento entre os inputs
  },
  botaoContainer: {
    marginTop: 30, // Ajustei para dar um espaço maior entre o último input e o botão
    gap: 15, // Maior espaçamento entre os botões
  },
});
