import { StyleSheet, View } from 'react-native';


// se debe instalar previamente npm install react-native-vector-icons --save
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function (){



 const styles = StyleSheet.create({

    semana: {
      fontSize: a+5,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contenido : {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contenidoList : {
      flexDirection: 'column',
      justifyContent: 'space-between',
      //padding: 20,
  
    },
    titulodiaTab: { // de las pantallas de tabfouter
      fontWeight: 'bold',
      fontSize: a+10,
      textAlign: 'center',
    },
    titulodia: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: a+10,
      textAlign: 'center',
    },
    paragraph: {
      //flex: 1,
      fontSize: a+18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding : 10,
    },
     subtitulo: {
      //flex: 1,
      fontSize: a+8,
      fontWeight: 'bold',
      textAlign: 'center',
      padding : 10,
    },
    nombre: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: a,
      textAlign: 'center',
    },
    titulo: {
      color: 'red',
      fontSize: a-5,
      textAlign: 'center',
    },
    cuerpo: {
      fontSize: a-5,
    },
    cita: {
      color: 'red',
      fontSize: a-5,
    },
    enlace: {
      fontWeight: 'bold',
      fontSize: a-5,
      marginLeft: 30,
      textDecorationLine: 'underline',
    },
    antifona: {
      fontWeight: 'bold',
      fontSize: a-5,
      marginLeft: 15,    
    },
    responsorio: {
      fontSize: a-5,
      marginLeft: 15,
    },
  
    container: {//container de dias y lista de oraciones y partes
      marginTop: 20,
      padding: 10,
    },
    containerDraw: {// de drawer 
      //flex: 1,
      padding: 25,
      backgroundColor: '#ecf0f1',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    containerCompl: {// de completorio 
      flex: 1,
      justifyContent: 'center',
      //paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 0,
    },
  
    containerEnt: {// de entrada
      flex: 1,
      //justifyContent: 'center',
      paddingTop: 25,
      backgroundColor: '#ecf0f1',
    },
  
    containerList: {// de listaoraciones
      marginTop: 20,
      padding: 25,
    },
  
  ////////////////////////////// estilos de imagenes de los componentes /////////////////////////////
  
    imageEnt: {
      justifyContent: "flex-end",
       width: '100%',    
    },
    image2Ent: {
      alignSelf: 'center',
       width: '25%',    
       height: '15%',
    },
    imageCan1: {
      height: 200,
      width: '100%',
      resizeMode : 'contain',
   },
   imageCan2: {
    height: 200,
    width: '100%',
    resizeMode : 'contain',
  },
  imageCan3: {
    height: 200,
    width: '100%',
    resizeMode : 'contain',
  },
  imageCan4: {
    height: 250,
    width: '100%',
    resizeMode : 'contain',
  },
  
  imageHim2: {
    height: 200,
    width: '100%',
    resizeMode : 'contain',
  },
  imageHim3: {
    height: 250,
    width: '100%',
    resizeMode : 'contain',
  },
  imageHim4: {
    height: 320,
    width: '100%',
    resizeMode : 'contain',
  },
  imageHim5: {
    height: 220,
    width: '100%',
    resizeMode : 'contain',
  },
  imageHim6: {
    height: 320,
    width: '100%',
    resizeMode : 'contain',
  },
  imageResp1: {
    height: 150,
    width: '100%',
    resizeMode : 'contain',
  },
  imageResp2: {
    height: 200,
    width: '100%',
    resizeMode : 'contain',
  },
  imageResp3: {
    height: 320,
    width: '100%',
    resizeMode : 'contain',
  },
  imageResp4: {
    height: 220,
    width: '100%',
    resizeMode : 'contain',
  },
  
  imageSalmDom: {
    height: 250,
    width: '100%',
    resizeMode : 'contain',
  },
  imageSalmJue: {
    height: 120,
    width: '100%',
    resizeMode : 'contain',
  },
  imageSalmLun: {
    height: 120,
    width: '100%',
    resizeMode : 'contain',
  },
  imageSalmMar: {
    height: 120,
    width: '100%',
    resizeMode : 'contain',
  },
  imageSalmMie: {
    height: 200,
    width: '100%',
    resizeMode : 'contain',
  },
  imageSalmVie: {
    height: 120,
    width: '100%',
    resizeMode : 'contain',
  },
  imageSalmSab: {
    height: 120,
    width: '100%',
    resizeMode : 'contain',
  },
  
  imageSalve1: {
    height: 500,
    width: '100%',
    resizeMode : 'contain',
  },
  imageSalve2: {
    height: 400,
    width: '100%',
    resizeMode : 'contain',
  },
  
  imageStodom1a: {
    height: 550,
    width: '100%',
    resizeMode : 'contain',
  },
  imageStodom1b: {
  height: 300,
  width: '100%',
  resizeMode : 'contain',
  },
  imageStodom2: {
    height: 700,
    width: '100%',
    resizeMode : 'contain',
  },
  imageStodom3: {
    height: 360,
    width: '100%',
    resizeMode : 'contain',
  },
  imageStodom4: {
    height: 450,
    width: '100%',
    resizeMode : 'contain',
  },
  imageStodom5: {
    height: 300,
    width: '100%',
    resizeMode : 'contain',
  },
  imageStodom6: {
    height: 300,
    width: '100%',
    resizeMode : 'contain',
  },
  
  
  });
  
  

}
