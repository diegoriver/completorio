import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

// se importan los variable.variable.variable.variable.variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import HimnosIniciales from '../../../textos/himnos.json';

export default function Himno4() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text></Text>
      <Text style={variable.styles.nombre}>{HimnosIniciales.himno7.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{HimnosIniciales.himno7.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

