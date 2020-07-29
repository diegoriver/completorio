import * as React from 'react';
import { Text, ScrollView, Image} from 'react-native';

// se importan los variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import HimnosIniciales from '../../../textos/himnos.json';

export default function Himno2() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text></Text>
      <Text style={variable.styles.nombre}>{HimnosIniciales.himno2.nombre}</Text>
      <Image style={variable.styles.imageHim2} source={require('../imagescompletorio/soldemiser.png')} />

      <Text style={variable.styles.cuerpo}>{HimnosIniciales.himno2.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}