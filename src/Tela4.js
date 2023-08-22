import React from "react";
import { View, Text, Button } from "react-native";

export default function Tela4({ route, navigation }){
    const back = () =>{
        navigation.navigate('TelaInicial');
    }
    return(
        <View>
            <Text >Conteudos</Text>
        </View>
    )
}