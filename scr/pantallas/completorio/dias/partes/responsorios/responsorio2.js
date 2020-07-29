import * as React from 'react';
import { Text, ScrollView, Image } from 'react-native';
// se importan los variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import ResponsorioBreve from '../../../textos/responsorios.json';


export default function Responsorio2() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text></Text>
      <Text style={variable.styles.nombre}>{ResponsorioBreve.responsorio2.nombre}</Text>
      <Image style={variable.styles.imageResp2} source={require('../imagescompletorio/responsoriosabadoydomingo.png')} />

      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio2.v1}</Text>
      <Text style={variable.styles.responsorio}>{ResponsorioBreve.responsorio2.r1}</Text>
      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio2.v2}</Text>
      <Text style={variable.styles.responsorio}>{ResponsorioBreve.responsorio2.r2}</Text>
      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio2.v3}</Text>
      <Text style={variable.styles.responsorio}>{ResponsorioBreve.responsorio2.r3}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}