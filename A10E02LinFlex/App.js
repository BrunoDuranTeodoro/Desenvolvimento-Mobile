import React from 'react';
import {View} from "react-native";
import styles from "./styles";
import Box from "./box";


export default function App() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
    </View>
  );
}