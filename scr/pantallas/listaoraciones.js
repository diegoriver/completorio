import React from 'react';
import { Text, ScrollView, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import * as variable from "../componentes/variables";


import Angelusp from './listaoraciones/angelus';
import Angeluslatinp from './listaoraciones/angeluslatin';
import Reinap from './listaoraciones/reina';
import Reginap from './listaoraciones/regina';
import Bienaventuradap from './listaoraciones/bienaventurada';
import Espiritudivinop from './listaoraciones/espiritudivino';
import Espiritusantop from './listaoraciones/espiritusanto';
import Sacrump from './listaoraciones/sacrum';
import Sagradop from './listaoraciones/sagrado';
import Santotomasp from './listaoraciones/santotomas';
import Virgenp from './listaoraciones/virgen';

function ListScreen({ navigation }) {
  return (
    <ScrollView style={variable.styles.containerList}>
      <Text style={variable.styles.titulodiaTab}>ORACIONES DEL COMPLETORIO DOMINICANO</Text>
      <Text> </Text>
      <View style={variable.styles.contenidoList}>
            <Button title="ANGELUS"  onPress={() => navigation.navigate('Angelus')}/>
            <Text> </Text>
            <Button title="ANGELUS LATIN"  onPress={() => navigation.navigate('Angeluslatin')} />
            <Text> </Text>
            <Button title="REINA DEL CIELO "  onPress={() => navigation.navigate('Reina del Cielo')} />
            <Text> </Text>
            <Button title="REGINA COELI"  onPress={() => navigation.navigate('Regina Coele')} />
            <Text> </Text>
            <Button title="VEN, ESPÍRITU SANTO"  onPress={() => navigation.navigate('Ven, Espíritu Santo')} />
            <Text> </Text>
            <Button title="VEN, ESPÍRITU DIVINO"   onPress={() => navigation.navigate('Ven, Espíritu Divino')}  />
            <Text> </Text>
            <Button title="ORACIÓN DE SANTO TOMÁS DE AQUINO PARA ORDENAR SABIAMENTE LA VIDA"  onPress={() => navigation.navigate('Oración de Santo Tomás')} />
            <Text> </Text>
            <Button title="ORACIÓN A LA VIRGEN MARÍA"  onPress={() => navigation.navigate('Oración a la Virgen María')} />
            <Text> </Text>
            <Button title="ORACIÓN A LA BIENAVENTURADA VIRGEN MARÍA (Santo Tomás de Aquino)"  onPress={() => navigation.navigate('Oración a la Bienaventurada Virgen María')} />
            <Text> </Text>
            <Button title="OH SAGRADO BANQUETE" onPress={() => navigation.navigate('Oh Sagrado Banquete')}  />
            <Text> </Text>
            <Button title="O SACRUM CONVIVIUM"  onPress={() => navigation.navigate('O Sacrum convivium')} />
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

      </View>

    </ScrollView>

  );
}

function Angelus({ navigation }) { return (<Angelusp />);}
function Angeluslatin({ navigation }) { return (<Angeluslatinp />);}
function Reina({ navigation }) { return (<Reinap />);}
function Regina({ navigation }) { return (<Reginap />);}
function Bienaventurada({ navigation }) { return (<Bienaventuradap />);}
function Espiritudivino({ navigation }) { return (<Espiritudivinop />);}
function Espiritusanto({ navigation }) { return (<Espiritusantop />);}
function Sacrum({ navigation }) { return (<Sacrump />);}
function Sagrado({ navigation }) { return (<Sagradop />);}
function Santotomas({ navigation }) { return (<Santotomasp />);}
function Virgen({ navigation }) { return (<Virgenp />);}


const Stacko = createStackNavigator();

export default function listaOraciones() {
  return (
  <Stacko.Navigator initialRouteName="Lista de oraciones"  headerMode= "none" >
    <Stacko.Screen name="Lista de oraciones" component={ListScreen} />
    <Stacko.Screen name="Angelus" component={Angelus} />
    <Stacko.Screen name="Angeluslatin" component={Angeluslatin} />
    <Stacko.Screen name="Reina del Cielo" component={Reina} />
    <Stacko.Screen name="Regina Coele" component={Regina} />

    <Stacko.Screen name="Oración a la Bienaventurada Virgen María" component={Bienaventurada} />
    <Stacko.Screen name="Ven, Espíritu Divino" component={Espiritudivino} />
    <Stacko.Screen name="Ven, Espíritu Santo" component={Espiritusanto} />
    <Stacko.Screen name="O Sacrum convivium" component={Sacrum} />
    <Stacko.Screen name="Oh Sagrado Banquete" component={Sagrado} />
    <Stacko.Screen name="Oración de Santo Tomás" component={Santotomas} />
    <Stacko.Screen name="Oración a la Virgen María" component={Virgen} />
  </Stacko.Navigator>
 

    );
}





