import * as React from 'react';
import { Text, ScrollView, Image } from 'react-native';

import Cantico from '../../../textos/canticoevangelico.json';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';


export default function Cantico1() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Cantico.cantico4.nombre}</Text>
      <Image style={variable.styles.imageCan4} source={require('../imagescompletorio/canticofiesta.png')} />

      <Text style={variable.styles.antifona}>{Cantico.cantico4.antifona}</Text>
      <Text style={variable.styles.responsorio}>{Cantico.cantico1.TP}</Text>
      <Text style={variable.styles.cuerpo}>{Cantico.cantico4.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Cantico.cantico4.antifona}</Text>
      <Text style={variable.styles.responsorio}>{Cantico.cantico4.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>

  );
}
