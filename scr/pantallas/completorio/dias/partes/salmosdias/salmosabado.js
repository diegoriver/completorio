import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salmos from '../../../textos/salmos.json';


export default function Salmomiercoles() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salmos.salmo4.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo4.titulo}</Text>
      <Image style={variable.styles.imageSalmSab} source={require('../imagescompletorio/salmosabado.png')} />

      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo4.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo4.TP}</Text>
      <Text></Text>
      <Text style={variable.styles.cuerpo}>{Salmos.salmo4.cuerpo}</Text>

      <Text style={variable.styles.nombre}>{Salmos.salmo133.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo133.titulo}</Text>
      <Text style={variable.styles.cuerpo}>{Salmos.salmo133.cuerpo}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo133.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo133.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

