import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salve from '../../../textos/salve.json';

export default function Salve1p() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salve.salve.nombre}</Text>
      <Image style={variable.styles.imageSalve2} source={require('../imagescompletorio/salvecorta.jpg')} />

      <Text style={variable.styles.cuerpo}>{Salve.salve.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Salve.v2}</Text>
      <Text style={variable.styles.responsorio}>{Salve.r2}</Text>
      <Text style={variable.styles.nombre}>{Salve.latin.nombre}</Text>
      <Text ></Text>

      <Text style={variable.styles.cuerpo}>{Salve.latin.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
