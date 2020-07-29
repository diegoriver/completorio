import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Virgenp() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion8.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion8.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion8.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion8.r1}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}

