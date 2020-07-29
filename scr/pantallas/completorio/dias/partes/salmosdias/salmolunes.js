import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salmos from '../../../textos/salmos.json';


export default function Salmolunes() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salmos.salmo85.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo85.titulo}</Text>
      <Image style={variable.styles.imageSalmLun} source={require('../imagescompletorio/salmolunes.png')} />

      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo85.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo85.TP}</Text>
      <Text></Text>
 
      <Text style={variable.styles.cuerpo}>{Salmos.salmo85.cuerpo}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo85.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo85.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

