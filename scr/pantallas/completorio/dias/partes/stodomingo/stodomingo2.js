import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';


import StoDomingo from '../../../textos/domingo.json';


export default function StoDomingop() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{StoDomingo.ospem.nombre}</Text>
      <Image style={variable.styles.imageStodom2} source={require('../imagescompletorio/ospemcorto.png')} />

      <Text style={variable.styles.cuerpo}>{StoDomingo.ospem.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{StoDomingo.ospem.v}</Text>
      <Text style={variable.styles.responsorio}>{StoDomingo.ospem.r}</Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>{StoDomingo.latin.nombre}</Text>
      <Text></Text>
      <Text style={variable.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
}






