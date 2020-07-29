import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los variable.variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import HimnosIniciales from '../../../textos/himnos.json';

export default function Himno3() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text></Text>
      <Text style={variable.styles.nombre}>{HimnosIniciales.himno3.nombre}</Text>
      <Image style={variable.styles.imageHim3} source={require('../imagescompletorio/cercadeti.png')} />

      <Text style={variable.styles.cuerpo}>{HimnosIniciales.himno3.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

