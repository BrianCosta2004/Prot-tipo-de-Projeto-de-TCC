import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import inicial from './views/Inicial/inicial';
import navegacaoTab from './navegacaoTab';
import estiloStack from './estiloStack';

const Stack = createStackNavigator();

const navegacaoStack = () => {
    return (
        <Stack.Navigator initialRouteName="inicial" >
            <Stack.Screen 
                name="inicial" 
                component={inicial}
                options={
                    { cardStyle: estiloStack.screeninicial,
                    headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="contato" 
                component={navegacaoTab}
                options={
                    { cardStyle: estiloStack.screeninicial,
                    headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="sobre" 
                component={navegacaoTab}
                options={
                    { cardStyle: estiloStack.screensobre,
                    headerShown: false
                    }            
                }               
            />
        </Stack.Navigator>
    );
}

export default navegacaoStack;