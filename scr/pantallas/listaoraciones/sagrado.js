import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Sagradop() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion10.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion10.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion10.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion10.r1}</Text>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Oracion.oracion10.oremos}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion10.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}

