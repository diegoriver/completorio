import * as React from 'react';
import { Text, ScrollView, Image } from 'react-native';

// se importan los variable.variable.variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import HimnosIniciales from '../../../textos/himnos.json';

export default function Himno4() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text></Text>
      <Text style={variable.styles.nombre}>{HimnosIniciales.himno5.nombre}</Text>
      <Image style={variable.styles.imageHim5} source={require('../imagescompletorio/juntoatisenor.png')} />

      <Text style={variable.styles.cuerpo}>{HimnosIniciales.himno5.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

