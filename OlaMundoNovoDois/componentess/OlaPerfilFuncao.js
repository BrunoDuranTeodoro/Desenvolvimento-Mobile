import React from 'react';
import { View, Text } from 'react-native';

export default function (props) {
  return (
    <View>
      <Text>Nome:{props.nome}</Text>
      <Text>Endereço:{props.endereco}</Text>
      <Text>Telefone:{props.telefone}</Text>
    </View>
  );
}
