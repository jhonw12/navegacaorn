import React from 'react'
import { View, Text, Button} from 'react-native';

export default function Contato({route}) {
  return (
    <View>
        <Text>Nome: Jhon William</Text>
        <Text>Endereço: Trav. Francisco José da Silva</Text>
        <Text>Contato: (91) 4001-9001</Text>
        <Text>Gerente: {route.params.gerente} </Text>
    </View>
  );
}