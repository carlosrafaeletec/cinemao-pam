import React from "react";
import { View, TextInput, Button } from "react-native";

export default function Tela3({ navigation}){
    const Tela4 = () =>{
        navigation.navigate('Tela4');
    }
    return(
        <View>
            <TextInput placeholder="Digite seu Usuario: "/>
            <TextInput placeholder="Sua senha: "/>
            <TextInput placeholder="Digite seu email: "/>
            <Button title = "Entrar" onPress = { Tela4 }/>
        </View>
    )
};