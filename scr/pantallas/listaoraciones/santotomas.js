import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Santotomasp() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion7.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion7.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}

