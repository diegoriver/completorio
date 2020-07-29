import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Angeluslatinp() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion2.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion2.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion2.r1}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion2.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion2.v2}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion2.r2}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion2.v3}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion2.r3}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion2.v4}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion2.r4}</Text>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Oracion.oracion2.oremos}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion2.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}
