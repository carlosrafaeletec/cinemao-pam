import react, { useState } from "react";
import { View, Button } from "react-native";


export default function TelaInicio({ navigation }){
    const Tela2 = () =>{
        navigation.navigate('Tela2');
    }
    const Tela3 = () =>{
        navigation.navigate('Tela3');
    }
    return(
        <View>
            <Button title="Cadastra-se" onPress = { Tela2 } />
            <Button title="Login" onPress = { Tela3 } />
        </View>
    )
};