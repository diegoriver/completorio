import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salmos from '../../../textos/salmos.json';


export default function Salmoviernes() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salmos.salmo87.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo87.titulo}</Text>
      <Image style={variable.styles.imageSalmVie} source={require('../imagescompletorio/salmoviernes.png')} />

      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo87.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo87.TP}</Text>
      <Text></Text>
      <Text style={variable.styles.cuerpo}>{Salmos.salmo87.cuerpo}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo87.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo87.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
