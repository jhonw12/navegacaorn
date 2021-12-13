import React from 'react'
import { View, Text} from 'react-native';

export default function sobre() {
  return (
    <View>
      <Text> Meu Nome é: {route.params.nome} </Text>
    </View>
  );
}