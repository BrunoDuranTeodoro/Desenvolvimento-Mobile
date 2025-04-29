import { Text, View, FlatList } from "react-native";
import styles from "./styles.js";


const nomes = ["Heloisa", "Biels", "Joao", "Gabriel", "Bruno"];


const data = new Array(8)
  .fill(null)
  .map((v, i) => ({
    key: i.toString(),  
    value: nomes[Math.floor(Math.random() * nomes.length)] 
  }));

export default function App(){
  return(
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}