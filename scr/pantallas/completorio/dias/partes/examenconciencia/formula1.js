import * as React from 'react';
import { Text, ScrollView } from 'react-native';

// se importan los variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Examen from '../../../textos/examenconciencia.json';

export default function Formula1() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Examen.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Examen.oracionInicial}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Examen.examen1.oracion}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Examen.examen1.v1}</Text>
      <Text style={variable.styles.responsorio}>{Examen.examen1.r1}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
