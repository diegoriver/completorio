import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Sacrump() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion11.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion11.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion11.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion11.r1}</Text>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Oracion.oracion11.oremos}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion11.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}

