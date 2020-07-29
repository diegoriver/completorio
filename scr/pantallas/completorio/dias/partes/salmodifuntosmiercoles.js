import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// se importan los variable.variable.styles desde varible.js
import * as variable from '../../../../componentes/variables';

import SalmoDifuntos from '../../textos/salmosdifuntos.json';


export default function SalmoDifuntosp() {
  return (
    <View>
      <Text style={variable.styles.nombre}>ORACIÓN POR LOS DIFUNTOS</Text>
      <Text style={variable.styles.nombre}>{SalmoDifuntos.miercoles.nombre}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.miercoles.v1}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.miercoles.r1}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.miercoles.v2}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.miercoles.r2}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.miercoles.v3}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.miercoles.r3}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.miercoles.v4}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.miercoles.r4}</Text>
      <Text style={variable.styles.antifona}>{SalmoDifuntos.miercoles.v5}</Text>
      <Text style={variable.styles.responsorio}>{SalmoDifuntos.miercoles.r5}</Text>
    </View>
  );
}






