import * as React from 'react';
import { Text, ScrollView } from 'react-native';

import Oracion from './textos/lista.json';

import * as variable from "../../componentes/variables";


export default function Angelusp() {
  return (
    <ScrollView  style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>{Oracion.oracion1.nombre}</Text>
      <Text> </Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion1.v1}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion1.r1}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion1.cuerpo}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion1.v2}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion1.r2}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion1.v3}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion1.r3}</Text>
      <Text style={variable.styles.antifona}>{Oracion.oracion1.v4}</Text>
      <Text style={variable.styles.responsorio}>{Oracion.oracion1.r4}</Text>
      <Text> </Text>
      <Text style={variable.styles.nombre}>{Oracion.oracion1.oremos}</Text>
      <Text style={variable.styles.cuerpo}>{Oracion.oracion1.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  );
}
