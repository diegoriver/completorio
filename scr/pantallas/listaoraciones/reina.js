import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Reinap() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion3.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion3.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion3.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion3.r1}</Text>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Oracion.oracion3.oremos}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion3.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}

