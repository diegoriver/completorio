import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los variable.variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salmos from '../../../textos/salmos.json';


export default function Salmomartes() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salmos.salmo142.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo142.titulo}</Text>
      <Image style={variable.styles.imageSalmMar} source={require('../imagescompletorio/salmomartes.png')} />

      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo142.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo142.TP}</Text>
      <Text></Text>

      <Text style={variable.styles.cuerpo}>{Salmos.salmo142.cuerpo}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo142.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo142.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
