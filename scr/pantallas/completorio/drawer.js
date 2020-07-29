import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import * as variable from "../../componentes/variables";


import Lunes1p from './dias/lunes1';
import Martes1p from './dias/martes1';
import Miercoles1p from './dias/miercoles1';
import Jueves1p from './dias/jueves1';
import Viernes1p from './dias/viernes1';
import Sabado1p from './dias/sabado1';
import Domingo1p from './dias/domingo1';

import Lunes2p from './dias/lunes2';
import Martes2p from './dias/martes2';
import Miercoles2p from './dias/miercoles2';
import Jueves2p from './dias/jueves2';
import Viernes2p from './dias/viernes2';
import Sabado2p from './dias/sabado2';
import Domingo2p from './dias/domingo2';

import Lunes3p from './dias/lunes3';
import Martes3p from './dias/martes3';
import Miercoles3p from './dias/miercoles3';
import Jueves3p from './dias/jueves3';
import Viernes3p from './dias/viernes3';
import Sabado3p from './dias/sabado3';
import Domingo3p from './dias/domingo3';

import Lunes4p from './dias/lunes4';
import Martes4p from './dias/martes4';
import Miercoles4p from './dias/miercoles4';
import Jueves4p from './dias/jueves4';
import Viernes4p from './dias/viernes4';
import Sabado4p from './dias/sabado4';
import Domingo4p from './dias/domingo4';



function CompleScreen({ navigation }) {
  return (
    <View style={variable.styles.containerDraw}>
      <Text> </Text>
      <Text style={variable.styles.titulodiaTab}>COMPLETORIO DOMINICANO</Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={variable.styles.semana}>Semana 1</Text>
     <View style={variable.styles.contenido}>
            <Button title="Lun" onPress={() => navigation.navigate('Lunes 1')} />
            <Button title="Mar" onPress={() => navigation.navigate('Martes 1')} />
            <Button title="Mie" onPress={() => navigation.navigate('Miercoles 1')}  />
            <Button title="Jue" onPress={() => navigation.navigate('Jueves 1')}  />
            <Button title="Vie" onPress={() => navigation.navigate('Viernes 1')}  />
            <Button title="Sab" onPress={() => navigation.navigate('Sábado 1')}  />
            <Button title="Dom" onPress={() => navigation.navigate('Domingo 1')}  />
      </View>
      <Text> </Text>
      <Text style={variable.styles.semana}>Semana 2</Text>
      <View style={variable.styles.contenido}>
            <Button title="Lun" onPress={() => navigation.navigate('Lunes 2')} />
            <Button title="Mar" onPress={() => navigation.navigate('Martes 2')} />
            <Button title="Mie" onPress={() => navigation.navigate('Miercoles 2')}  />
            <Button title="Jue" onPress={() => navigation.navigate('Jueves 2')}  />
            <Button title="Vie" onPress={() => navigation.navigate('Viernes 2')}  />
            <Button title="Sab" onPress={() => navigation.navigate('Sábado 2')}  />
            <Button title="Dom" onPress={() => navigation.navigate('Domingo 2')}  />
      </View>
      <Text> </Text>
      <Text style={variable.styles.semana}>Semana 3</Text>
      <View style={variable.styles.contenido}>
            <Button title="Lun" onPress={() => navigation.navigate('Lunes 3')} />
            <Button title="Mar" onPress={() => navigation.navigate('Martes 3')} />
            <Button title="Mie" onPress={() => navigation.navigate('Miercoles 3')}  />
            <Button title="Jue" onPress={() => navigation.navigate('Jueves 3')}  />
            <Button title="Vie" onPress={() => navigation.navigate('Viernes 3')}  />
            <Button title="Sab" onPress={() => navigation.navigate('Sábado 3')}  />
            <Button title="Dom" onPress={() => navigation.navigate('Domingo 3')}  />
      </View>
      <Text> </Text>
      <Text style={variable.styles.semana}>Semana 4</Text>
      <View style={variable.styles.contenido}>
            <Button title="Lun" onPress={() => navigation.navigate('Lunes 4')} />
            <Button title="Mar" onPress={() => navigation.navigate('Martes 4')} />
            <Button title="Mie" onPress={() => navigation.navigate('Miercoles 4')}  />
            <Button title="Jue" onPress={() => navigation.navigate('Jueves 4')}  />
            <Button title="Vie" onPress={() => navigation.navigate('Viernes 4')}  />
            <Button title="Sab" onPress={() => navigation.navigate('Sábado 4')}  />
            <Button title="Dom" onPress={() => navigation.navigate('Domingo 4')}  />
      </View>

    </View>

  );
}

function Lunes1() {return (<Lunes1p />);}
function Martes1() {return (<Martes1p />);}
function Miercoles1() {return (<Miercoles1p />);}
function Jueves1() {return (<Jueves1p />);}
function Viernes1() {return (<Viernes1p />);}
function Sabado1() {return (<Sabado1p />);}
function Domingo1() {return (<Domingo1p />);}

function Lunes2() {return (<Lunes2p />);}
function Martes2() {return (<Martes2p />);}
function Miercoles2() {return (<Miercoles2p />);}
function Jueves2() {return (<Jueves2p />);}
function Viernes2() {return (<Viernes2p />);}
function Sabado2() {return (<Sabado2p />);}
function Domingo2() {return (<Domingo2p />);}

function Lunes3() {return (<Lunes3p />);}
function Martes3() {return (<Martes3p />);}
function Miercoles3() {return (<Miercoles3p />);}
function Jueves3() {return (<Jueves3p />);}
function Viernes3() {return (<Viernes3p />);}
function Sabado3() {return (<Sabado3p />);}
function Domingo3() {return (<Domingo3p />);}

function Lunes4() {return (<Lunes4p />);}
function Martes4() {return (<Martes4p />);}
function Miercoles4() {return (<Miercoles4p />);}
function Jueves4() {return (<Jueves4p />);}
function Viernes4() {return (<Viernes4p />);}
function Sabado4() {return (<Sabado4p />);}
function Domingo4() {return (<Domingo4p />);}

const Stack = createStackNavigator();

export default function Drawer() {
  return (
    
      <Stack.Navigator initialRouteName="Completorio"  headerMode= "none" >
        <Stack.Screen name="Completorio" component={CompleScreen} />
        <Stack.Screen name="Lunes 1" component={Lunes1} />
        <Stack.Screen name="Martes 1" component={Martes1} />
        <Stack.Screen name="Miercoles 1" component={Miercoles1} />
        <Stack.Screen name="Jueves 1" component={Jueves1} />
        <Stack.Screen name="Viernes 1" component={Viernes1} />
        <Stack.Screen name="Sábado 1" component={Sabado1} />
        <Stack.Screen name="Domingo 1" component={Domingo1} />

        <Stack.Screen name="Lunes 2" component={Lunes2} />
        <Stack.Screen name="Martes 2" component={Martes2} />
        <Stack.Screen name="Miercoles 2" component={Miercoles2} />
        <Stack.Screen name="Jueves 2" component={Jueves2} />
        <Stack.Screen name="Viernes 2" component={Viernes2} />
        <Stack.Screen name="Sábado 2" component={Sabado2} />
        <Stack.Screen name="Domingo 2" component={Domingo2} />

        <Stack.Screen name="Lunes 3" component={Lunes3} />
        <Stack.Screen name="Martes 3" component={Martes3} />
        <Stack.Screen name="Miercoles 3" component={Miercoles3} />
        <Stack.Screen name="Jueves 3" component={Jueves3} />
        <Stack.Screen name="Viernes 3" component={Viernes3} />
        <Stack.Screen name="Sábado 3" component={Sabado3} />
        <Stack.Screen name="Domingo 3" component={Domingo3} />

        <Stack.Screen name="Lunes 4" component={Lunes4} />
        <Stack.Screen name="Martes 4" component={Martes4} />
        <Stack.Screen name="Miercoles 4" component={Miercoles4} />
        <Stack.Screen name="Jueves 4" component={Jueves4} />
        <Stack.Screen name="Viernes 4" component={Viernes4} />
        <Stack.Screen name="Sábado 4" component={Sabado4} />
        <Stack.Screen name="Domingo 4" component={Domingo4} />

      </Stack.Navigator>
  );
}





