import * as React from 'react';
import { Text, ScrollView, Image} from 'react-native';

// se importan los variable.variable.variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import StoDomingo from '../../../textos/domingo.json';


export default function StoDomingop() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{StoDomingo.ohesperanza.nombre}</Text>
      <Image style={variable.styles.imageStodom3} source={require('../imagescompletorio/ohesperanza1.png')} />
      <Image style={variable.styles.imageStodom3} source={require('../imagescompletorio/ohesperanza2.png')} />
      <Text></Text>

      <Text style={variable.styles.cuerpo}>{StoDomingo.ohesperanza.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{StoDomingo.ohesperanza.v}</Text>
      <Text style={variable.styles.responsorio}>{StoDomingo.ohesperanza.r}</Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>{StoDomingo.latin.nombre}</Text>
      <Text></Text>
      <Text style={variable.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
}





