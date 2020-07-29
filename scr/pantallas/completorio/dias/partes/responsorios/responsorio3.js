import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los variable.variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import ResponsorioBreve from '../../../textos/responsorios.json';


export default function Responsorio3() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{ResponsorioBreve.responsorio3.nombre}</Text>
      <Image style={variable.styles.imageResp3} source={require('../imagescompletorio/responsoriomemorias.png')} />

      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio3.v1}</Text>
      <Text style={variable.styles.responsorio}>{ResponsorioBreve.responsorio3.r1}</Text>
      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio3.v2}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

