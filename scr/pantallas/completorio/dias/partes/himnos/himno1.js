import * as React from 'react';
import { Text, ScrollView } from 'react-native';

// se importan los variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import HimnosIniciales from '../../../textos/himnos.json';

export default function Himno1() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{HimnosIniciales.himno1.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{HimnosIniciales.himno1.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

