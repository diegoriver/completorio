import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salmos from '../../../textos/salmos.json';


export default function Salmomiercoles() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salmos.salmo30.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo30.titulo}</Text>
      <Image style={variable.styles.imageSalmMie} source={require('../imagescompletorio/salmomiercoles.png')} />

      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo30.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo30.TP}</Text>
      <Text></Text>
      <Text style={variable.styles.cuerpo}>{Salmos.salmo30.cuerpo}</Text>

      <Text style={variable.styles.nombre}>{Salmos.salmo129.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo129.titulo}</Text>
      <Text style={variable.styles.cuerpo}>{Salmos.salmo129.cuerpo}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo129.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo129.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
