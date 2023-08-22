import React from "react";
import { View, TextInput, Button } from "react-native";

export default function Tela2({ navigation }){
    const [username, SetUsername] = React.useState('')
    const [password, SetPassword] = React.useState('')
    const [eml, SetEml] = React.useState('')
    const [cpf, SetCpf] = React.useState('')
    const Tela3 = () =>{
        navigation.navigate('Tela3');
    }
    return(
        <View>
            <TextInput placeholder="Digite seu nome de usuario: " value = { username } onChangeText={ SetUsername }/>
            <TextInput placeholder="Digite sua senha:"  value={ password } onChangeText = { SetPassword }/>
            <TextInput placeholder="Digite seu email: " value={ eml } onChangeText = { SetEml }/>
            <TextInput placeholder="Digite seu CPF: " value = { cpf } onChangeText = { SetCpf }/>
            <Button title = "Logar" onPress = { Tela3 } />
        </View>
    )
}