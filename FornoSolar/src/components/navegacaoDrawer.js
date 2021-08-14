import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import sobre from './views/Sobre/sobre';
import contato from './views/Contato/contato';

const Drawer = createDrawerNavigator();

const navegacaoDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="contato" component={contato}/>
      <Drawer.Screen name="sobre" component={sobre}/>
    </Drawer.Navigator>
  );
}

export default navegacaoDrawer;