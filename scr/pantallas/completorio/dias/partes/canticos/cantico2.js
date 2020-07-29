import * as React from 'react';
import { Text, ScrollView, Image } from 'react-native';

import Cantico from '../../../textos/canticoevangelico.json';

// se importan los variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';


export default function Cantico1() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Cantico.cantico2.nombre}</Text>
      <Image style={variable.styles.imageCan2} source={require('../imagescompletorio/canticosabadoydomingo.png')} />

      <Text style={variable.styles.antifona}>{Cantico.cantico2.antifona}</Text>
      <Text style={variable.styles.responsorio}>{Cantico.cantico1.TP}</Text>
      <Text style={variable.styles.cuerpo}>{Cantico.cantico2.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Cantico.cantico2.antifona}</Text>
      <Text style={variable.styles.responsorio}>{Cantico.cantico2.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>

  );
}


