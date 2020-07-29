import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salmos from '../../../textos/salmos.json';


export default function Salmodomingo() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salmos.salmo90.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo90.titulo}</Text>
      <Image style={variable.styles.imageSalmDom} source={require('../imagescompletorio/salmodomingo.png')} />

      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo90.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo90.TP}</Text>
      <Text></Text>

      <Text style={variable.styles.cuerpo}>{Salmos.salmo90.cuerpo}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo90.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo90.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
