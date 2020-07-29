// BOTON para aumentar o disminuir un valor
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CambiarFuente from '../componentes/variables';


// se debe instalar previamente npm install react-native-vector-icons --save
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export let a= 20;

export function aumentar() {
    if (a<25){
      
      a++;
      alert(a);
    }else{
    } 
    return a;
  }

export function disminuir() {
    if (a>18){
      a--;
      alert(a);
    }else{
    }
    return a;
  }

export default function tamanoFuente (){
    return (
      <>
      <View style={styles1.header}> 
      <Icon.Button name="format-font-size-increase" backgroundColor="#0B4DC260"  onPress={aumentar}>
      </Icon.Button>      
      <Icon.Button name="format-font-size-decrease" backgroundColor="#0B4DC240" onPress={disminuir}>
      </Icon.Button>
      </View>
      
      </>
    );
  }

const styles1 = StyleSheet.create({
  header: {
    flexDirection: 'row-reverse',
    padding: 5,   
  },
});
