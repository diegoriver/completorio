import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import StoDomingo from '../../../textos/domingo.json';


export default function StoDomingop() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{StoDomingo.ohluz.nombre}</Text>
      <Image style={variable.styles.imageStodom6} source={require('../imagescompletorio/ohluz.png')} />
      <Text></Text>

      <Text style={variable.styles.cuerpo}>{StoDomingo.ohluz.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{StoDomingo.ohluz.v}</Text>
      <Text style={variable.styles.responsorio}>{StoDomingo.ohluz.r}</Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>{StoDomingo.latin.nombre}</Text>
      <Text></Text>

      <Text style={variable.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
}





