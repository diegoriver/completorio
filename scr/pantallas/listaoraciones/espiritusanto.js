import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Espiritusantop() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion5.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion5.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion5.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion5.r1}</Text>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Oracion.oracion5.oremos}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion5.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}
