import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estilocontato from './estilocontato';

function contato({ navigation }) {  
    return (
        <View style={estilocontato.container}>
            
            <View style={estilocontato.borda}>

                
                <Text style={estilocontato.texto1}>CONTATO</Text> 
                <Text style={estilocontato.texto}>Brian Costa - Eduardo Rodrigues - Samuel Almeida - Thiago Gallano</Text>
                <Text style={estilocontato.texto}>3ºMDS-A</Text>
                <Text style={estilocontato.texto}>(19) 98881-2004</Text>
                <Text style={estilocontato.texto}>(19) 99423-4934</Text>
                <Text style={estilocontato.texto}>(19) 98203-8145</Text>
                <Text style={estilocontato.texto}>(19) 99482-6783</Text>
               
            </View>   
                

               

            
        </View>
    )
}

export default contato;