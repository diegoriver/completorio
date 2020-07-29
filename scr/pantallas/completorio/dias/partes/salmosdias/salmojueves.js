import * as React from 'react';
import { Text, ScrollView, Image } from 'react-native';

// se importan los variable.styles desde varible.js
import * as variable from '../../../../../componentes/variables';

import Salmos from '../../../textos/salmos.json';


export default function Salmomjueves() {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.nombre}>{Salmos.salmo15.nombre}</Text>
      <Text style={variable.styles.titulo}>{Salmos.salmo15.titulo}</Text>
      <Image style={variable.styles.imageSalmJue} source={require('../imagescompletorio/salmojueves.png')} />

      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo15.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo15.TP}</Text>
      <Text></Text>
      
      <Text style={variable.styles.cuerpo}>{Salmos.salmo15.cuerpo}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo15.antifona}</Text>
      <Text style={variable.styles.antifona}>Ant. {Salmos.salmo15.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}


