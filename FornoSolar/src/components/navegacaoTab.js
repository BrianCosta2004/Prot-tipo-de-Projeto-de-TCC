import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RotasDrawer from './navegacaoDrawer';
import contato from './views/Contato/contato';


const Tab = createBottomTabNavigator();

const navegacaoTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: 'white'},
        activeTintColor: 'black' 
      }
      }
    >
      <Tab.Screen name="sobre" component={RotasDrawer} /> 
      <Tab.Screen name="contato" component={RotasDrawer} />
    </Tab.Navigator>
  );
}

export default navegacaoTab;