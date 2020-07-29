import React from 'react';
import { View, StyleSheet } from 'react-native';
import Drawer from './completorio/drawer';

import * as variable from "../componentes/variables";


export default function Completorio() {
  return (
   <View style={variable.styles.containerCompl}>
       <Drawer />
    </View>
    );
}

