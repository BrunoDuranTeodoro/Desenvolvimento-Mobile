import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./componentes/Details";
import Home from "./componentes/Home";



const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {}
        <Stack.Screen name="Home" component={Home} />
        {}
        <Stack.Screen
            name="Details"
            component={Details}
            
            options={({ route }) => ({
              headerRight: () => {
                return (
                  <Button
                    title="Buy"
                    onPress={() => {}}
                    disabled={route.params.stock === 0}
                  />
                )
              }
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}