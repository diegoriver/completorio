import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import StoDomingo from '../../../textos/domingo.json';


export default function StoDomingop() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{StoDomingo.ohlumen.nombre}</Text>
      <Image style={variable.styles.imageStodom4} source={require('../imagescompletorio/ohlumen.png')} />
      <Text></Text>

      <Text style={variable.styles.cuerpo}>{StoDomingo.ohlumen.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{StoDomingo.ohlumen.v}</Text>
      <Text style={variable.styles.responsorio}>{StoDomingo.ohlumen.r}</Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>{StoDomingo.latin.nombre}</Text>
      <Text></Text>
      <Text style={variable.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
}





