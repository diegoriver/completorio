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
      <Text style={variable.styles.antifona}>{Examen.examen6.v1}</Text>
      <Text style={variable.styles.responsorio}>{Examen.examen6.r1}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Examen.examen6.v2}</Text>
      <Text style={variable.styles.responsorio}>{Examen.examen6.r2}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Examen.examen6.v3}</Text>
      <Text style={variable.styles.responsorio}>{Examen.examen6.r3}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Examen.examen6.oracion}</Text>
      <Text style={variable.styles.cuerpo}>{Examen.examen6.roracion}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

