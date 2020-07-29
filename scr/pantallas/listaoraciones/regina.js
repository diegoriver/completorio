import * as React from 'react';
import { Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";

export default function Reginap() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion4.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion4.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion4.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion4.r1}</Text>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Oracion.oracion4.oremos}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion4.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}

