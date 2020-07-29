import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// se importan los variable.variable.styles desde varible.js
import * as variable from '../../../../componentes/variables';

import SalmoDifuntos from '../../textos/salmosdifuntos.json';


export default function SalmoDifuntosp() {
  return (
    <View>
      <Text style={variable.styles.nombre}>ORACIÓN POR LOS DIFUNTOS</Text>
      <Text style={variable.styles.nombre}>{SalmoDifuntos.otrosdias.nombre}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.otrosdias.v1}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.otrosdias.r1}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.otrosdias.v2}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.otrosdias.r2}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.otrosdias.v3}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.otrosdias.r3}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.otrosdias.v4}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.otrosdias.r4}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.otrosdias.v5}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.otrosdias.r5}</Text>
    </View>
  );
}



