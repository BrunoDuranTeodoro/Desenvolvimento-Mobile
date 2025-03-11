import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilFuncao from './componentess/OlaPerfilFuncao';
import OlaPerfilClasse from './componentess/OlaPerfilClasse';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Função</Text>
      <OlaPerfilFuncao nome="Bruno" endereco="Senai" telefone="14325" />

      <Text style={styles.titulo}>Classe</Text>
      <OlaPerfilClasse nome="Bruno" endereco="Senai" telefone="14325" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
