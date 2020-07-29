import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';

// se importan los variable.styles desde varible.js
import * as variable from '../../../componentes/variables';

import InvocacioInicial from './partes/invocacioninicial';
//import ExamenConciencia from './partes/examenconciencia-n';
//import Himnos from './partes/himnos';
//import Responsorio from './partes/responsorio';
//import Canticos from './partes/canticos';

import SalmoDifuntos from './partes/salmodifuntosotros';
import Salmojueves from './partes/salmosdias/salmojueves';

//import Salmos from '../textos/salmos.json';
import Lectura from '../textos/lecturas.json';
import Final from '../textos/oracionfinal.json';
import Difuntos from '../textos/oraciondifuntos.json';

import Formulario1p from './partes/examenconciencia/formula1';
import Formulario2p from './partes/examenconciencia/formula2';
import Formulario3p from './partes/examenconciencia/formula3';
import Formulario4p from './partes/examenconciencia/formula4';
import Formulario5p from './partes/examenconciencia/formula5';
import Formulario6p from './partes/examenconciencia/formula6';

import Himno1p from './partes/himnos/himno1';
import Himno2p from './partes/himnos/himno2';
import Himno3p from './partes/himnos/himno3';
import Himno4p from './partes/himnos/himno4';
import Himno5p from './partes/himnos/himno5';
import Himno6p from './partes/himnos/himno6';
import Himno7p from './partes/himnos/himno7';
import Himno8p from './partes/himnos/himno8';
import Himno9p from './partes/himnos/himno9';

import Responsorio1p from './partes/responsorios/responsorio1';
import Responsorio2p from './partes/responsorios/responsorio2';
import Responsorio3p from './partes/responsorios/responsorio3';
import Responsorio4p from './partes/responsorios/responsorio4';

import Cantico1p from './partes/canticos/cantico1';
import Cantico2p from './partes/canticos/cantico2';
import Cantico3p from './partes/canticos/cantico3';
import Cantico4p from './partes/canticos/cantico4';

import Salve1p from './partes/salve/salve1';
import Salve2p from './partes/salve/salve2';
import Salve from '../textos/salve.json';

import StoDomingo1p from './partes/stodomingo/stodomingo1';
import StoDomingo2p from './partes/stodomingo/stodomingo2';
import StoDomingo3p from './partes/stodomingo/stodomingo3';
import StoDomingo4p from './partes/stodomingo/stodomingo4';
import StoDomingo5p from './partes/stodomingo/stodomingo5';
import StoDomingo6p from './partes/stodomingo/stodomingo6';
import StoDomingo from '../textos/domingo.json';

function CompletasScreen({ navigation }) {
  return (
    <ScrollView style={variable.styles.container}>
      <Text style={variable.styles.titulodia}>JUEVES CUARTA SEMANA</Text>
      <Text></Text>
      <InvocacioInicial />
      
      <Text></Text>
      <Text style={variable.styles.nombre}>EXAMEN DE CONCIENCIA</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Formulario1')}>Formulario 1</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Formulario2')}>Formulario 2</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Formulario3')}>Formulario 3</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Formulario4')}>Formulario 4</Text>
      <Text></Text>      
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Formulario5')}>Formulario 5</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Formulario6')}>Formulario 6</Text>
      <Text></Text>
      
      <Text></Text>
      <Text style={variable.styles.nombre}>HIMNOS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno1')}>QUE VES EN LA NOCHE</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno2')}>SOL DE MI SER</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno3')}>CERCA DE TI, SEÑOR</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno4')}>DÍA Y NOCHE</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno5')}>JUNTO A TI, SEÑOR</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno6')}>QUÉDATE CON NOSOTROS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno7')}>PORQUE ANOCHECE YA</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno8')}>BENDITO SILENCIO</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Himno9')}>LA NOCHE</Text>
      <Text></Text>
      

      <Text></Text>
      <Text style={variable.styles.nombre}>SALMOS</Text>
      <Salmojueves />

      <Text></Text>
      <Text style={variable.styles.nombre}>{Lectura.jueves4.nombre}</Text>
      <Text style={variable.styles.cuerpo}>{Lectura.jueves4.cuerpo}</Text>
      <Text style={variable.styles.cita}>{Lectura.jueves4.cita}</Text>

      <Text></Text>
      <Text style={variable.styles.nombre}>RESPONSORIO BREVE</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Responsorio1')}>FERIAS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Responsorio2')}>SÁBADOS Y DOMINGOS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Responsorio3')}>MEMORIAS Y FIESTAS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Responsorio4')}>SOLEMNIDADES Y TIEMPO DE PASCUA</Text>

      <Text></Text>
      <Text style={variable.styles.nombre}>CANTICO EVANGÉLICO</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Cantico1')}>FERIAS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Cantico2')}>SÁBADOS Y DOMINGOS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Cantico3')}>MEMORIAS</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('Cantico4')}>FIESTAS, SOLEMNIDADES Y TIEMPO DE PASCUA</Text>

      <Text></Text>
      <Text style={variable.styles.nombre}>{Final.jueves.nombre}</Text>
      <Text style={variable.styles.titulo}>{Final.jueves.titulo}</Text>
      <Text style={variable.styles.cuerpo}>{Final.jueves.cuerpo}</Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>{Final.bendicionfinal.nombre}</Text>
      <Text style={variable.styles.cuerpo}>{Final.bendicionfinal.cuerpo}</Text>

      <Text></Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>SALVE</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('SALVE - forma larga')}>SALVE - forma larga</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('SALVE - forma breve')}>SALVE - forma breve</Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>{Salve.jueves4.nombre}</Text>
      <Text style={variable.styles.cuerpo}>{Salve.jueves4.cuerpo}</Text>

      <Text></Text>
      <Text></Text>
      <Text style={variable.styles.nombre}>CANTO A SANTO DOMINGO</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('O SPEM MIRAM - forma larga')}>O SPEM MIRAM - forma larga</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('O SPEM MIRAM - forma breve')}>O SPEM MIRAM - forma breve</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('OH ESPERANZA')}>OH ESPERANZA</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('OH LUMEN')}>OH LUMEN</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('OH LUZ DE LA IGLESIA - forma larga')}>OH LUZ DE LA IGLESIA - forma larga</Text>
      <Text></Text>
      <Text style={variable.styles.enlace} onPress={() => navigation.navigate('OH LUZ DE LA IGLESIA - forma breve')}>OH LUZ DE LA IGLESIA - forma breve</Text>
      <Text></Text>

      <Text style={variable.styles.nombre}>{StoDomingo.jueves4.nombre}</Text>
      <Text style={variable.styles.cuerpo}>{StoDomingo.jueves4.cuerpo}</Text>

      <Text></Text>
      <SalmoDifuntos />

      <Text style={variable.styles.nombre}>{Difuntos.jueves.nombre}</Text>
      <Text style={variable.styles.cuerpo}>{Difuntos.jueves.cuerpo}</Text>

      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
}

function Formulario1() { return <Formulario1p />; }
function Formulario2() { return <Formulario2p />; }
function Formulario3() { return <Formulario3p />; }
function Formulario4() { return <Formulario4p />; }
function Formulario5() { return <Formulario5p />; }
function Formulario6() { return <Formulario6p />; }

function Himno1() { return <Himno1p />; }
function Himno2() { return <Himno2p />; }
function Himno3() { return <Himno3p />; }
function Himno4() { return <Himno4p />; }
function Himno5() { return <Himno5p />; }
function Himno6() { return <Himno6p />; }
function Himno7() { return <Himno7p />; }
function Himno8() { return <Himno8p />; }
function Himno9() { return <Himno9p />; }

function Responsorio1() { return <Responsorio1p />; }
function Responsorio2() { return <Responsorio2p />; }
function Responsorio3() { return <Responsorio3p />; }
function Responsorio4() { return <Responsorio4p />; }

function Cantico1() { return <Cantico1p />; }
function Cantico2() { return <Cantico2p />; }
function Cantico3() { return <Cantico3p />; }
function Cantico4() { return <Cantico4p />; }

function Salve1() { return <Salve1p />; }
function Salve2() { return <Salve2p />; }

function StoDomingo1() { return <StoDomingo1p />; }
function StoDomingo2() { return <StoDomingo2p />; }
function StoDomingo3() { return <StoDomingo3p />; }
function StoDomingo4() { return <StoDomingo4p />; }
function StoDomingo5() { return <StoDomingo5p />; }
function StoDomingo6() { return <StoDomingo6p />; }

const Stack1 = createStackNavigator();
//const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

export default function Martes1() {
  return (
    <Stack1.Navigator>
      <Stack1.Screen name="Completas" component={CompletasScreen} />
      <Stack1.Screen name="Formulario1" component={Formulario1} />
      <Stack1.Screen name="Formulario2" component={Formulario2} />
      <Stack1.Screen name="Formulario3" component={Formulario3} />
      <Stack1.Screen name="Formulario4" component={Formulario4} />
      <Stack1.Screen name="Formulario5" component={Formulario5} />
      <Stack1.Screen name="Formulario6" component={Formulario6} />

      <Stack1.Screen name="Himno1" component={Himno1} />
      <Stack1.Screen name="Himno2" component={Himno2} />
      <Stack1.Screen name="Himno3" component={Himno3} />
      <Stack1.Screen name="Himno4" component={Himno4} />
      <Stack1.Screen name="Himno5" component={Himno5} />
      <Stack1.Screen name="Himno6" component={Himno6} />
      <Stack1.Screen name="Himno7" component={Himno7} />
      <Stack1.Screen name="Himno8" component={Himno8} />
      <Stack1.Screen name="Himno9" component={Himno9} /> 

      <Stack1.Screen name="Responsorio1" component={Responsorio1} /> 
      <Stack1.Screen name="Responsorio2" component={Responsorio2} /> 
      <Stack1.Screen name="Responsorio3" component={Responsorio3} /> 
      <Stack1.Screen name="Responsorio4" component={Responsorio4} />

      <Stack1.Screen name="Cantico1" component={Cantico1} />
      <Stack1.Screen name="Cantico2" component={Cantico2} />        
      <Stack1.Screen name="Cantico3" component={Cantico3} />        
      <Stack1.Screen name="Cantico4" component={Cantico4} />

      <Stack1.Screen name="SALVE - forma larga" component={Salve1} />
      <Stack1.Screen name="SALVE - forma breve" component={Salve2} />        

      <Stack1.Screen name="O SPEM MIRAM - forma larga" component={StoDomingo1} />
      <Stack1.Screen name="O SPEM MIRAM - forma breve" component={StoDomingo2} />
      <Stack1.Screen name="OH ESPERANZA" component={StoDomingo3} />
      <Stack1.Screen name="OH LUMEN" component={StoDomingo4} />
      <Stack1.Screen name="OH LUZ DE LA IGLESIA - forma larga" component={StoDomingo5} />
      <Stack1.Screen name="OH LUZ DE LA IGLESIA - forma breve" component={StoDomingo6} />
  

    </Stack1.Navigator>
  );
}
