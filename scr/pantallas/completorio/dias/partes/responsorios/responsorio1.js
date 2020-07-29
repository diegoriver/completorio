import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import ResponsorioBreve from '../../../textos/responsorios.json';


export default function Responsorio1() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text></Text>
      <Text style={variable.styles.nombre}>{ResponsorioBreve.responsorio1.nombre}</Text>
      <Image style={variable.styles.imageResp1} source={require('../imagescompletorio/responsorioferia.png')} />

      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio1.v1}</Text>
      <Text style={variable.styles.responsorio}>{ResponsorioBreve.responsorio1.r1}</Text>
      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio1.v2}</Text>
      <Text style={variable.styles.responsorio}>{ResponsorioBreve.responsorio1.r2}</Text>
      <Text style={variable.styles.antifona}>{ResponsorioBreve.responsorio1.v3}</Text>
      <Text style={variable.styles.responsorio}>{ResponsorioBreve.responsorio1.r3}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}