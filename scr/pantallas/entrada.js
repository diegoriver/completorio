import React from 'react';
import { Text, View, Image } from 'react-native';

import * as variable from "../componentes/variables";


export default function Entrada() {
  return (
    <View style={variable.styles.containerEnt}>
      <>
     <Image style={variable.styles.imageEnt} source={require('../assets/DominicanStudies.jpg')} />
 
      <Text></Text>
      <Text style={variable.styles.paragraph}>Completorio Dominicos</Text>
      <Text style={variable.styles.subtitulo}>Provincia San Luís Bertrán de Colombia</Text>
      <Image style={variable.styles.image2Ent} source={require('../assets/EscOrden.png')} />
      </>
          
    </View>
    );
}

