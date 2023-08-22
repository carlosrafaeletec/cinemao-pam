import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tela2 from "./src/Tela2";
import TelaInicio from "./src/TelaInicial";
import Tela3 from "./src/Tela3";
import Tela4 from "./src/Tela4";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={ TelaInicio } />
        <Stack.Screen name="Tela2" component={ Tela2 } />
        <Stack.Screen name="Tela3" component = { Tela3 }/>
        <Stack.Screen name ="Tela4" component = { Tela4 } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};