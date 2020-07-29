//// SIN USO EN LA ACTUALIDAD /////

import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Creditos() {
  return (
    <>
    
   <View style={styles.container}>

    <ImageBackground source={require('../assets/marmol.png')} style={styles.imagebg}>
     <View style={styles.container2}>
      <Image style={styles.image2} source={require('../assets/logo_cruz-a7dba6f9.png')} />
      </View>
      <Text style={styles.paragraph}>DROp</Text>      
    </ImageBackground>

    </View>
    </>
    
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
    //padding: 0,
   
  },
  container2: {
    flex: 1,

  },
  paragraph: {
    flex: 0.2,
    margin: 24,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: "center",
    alignItems : "flex-end",
    paddingTop: 100,

  },
  image2: {
    //flex: 1,
    width: '100%',  
    justifyContent: 'center',
    alignItems : 'flex-end',
    resizeMode: "cover",

    
  },
  imagebg: {
    flex: 1,
    //alignItems : "center",
    //resizeMode: "cover",
    //justifyContent: "center"
  },
});