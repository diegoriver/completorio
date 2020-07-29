import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../componentes/variables';

import Inicial from '../../textos/invocacioninicial.json';




export default function InvocacionInicial() {
  return (
    <View>
      <Text style={variable.styles.nombre}>{Inicial.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Inicial.v}</Text>
      <Text style={variable.styles.responsorio}>{Inicial.r}</Text>
      <Text> </Text>
      <Text style={variable.styles.responsorio}>{Inicial.gloria}</Text>
    </View>
  );
}

