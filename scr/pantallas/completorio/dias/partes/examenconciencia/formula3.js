import * as React from 'react';
import { Text, ScrollView } from 'react-native';

// se importan los variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';


import Examen from '../../../textos/examenconciencia.json';

export default function Formula1() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Examen.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Examen.oracionInicial}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Examen.examen3.v1}</Text>
      <Text style={variable.styles.responsorio}>{Examen.examen3.r1}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Examen.examen3.v2}</Text>
      <Text style={variable.styles.responsorio}>{Examen.examen3.r2}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Examen.examen3.oracion}</Text>
      <Text style={variable.styles.cuerpo}>{Examen.examen3.roracion}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

