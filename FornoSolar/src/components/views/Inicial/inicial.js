import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloinicial from './estiloinicial';

function inicial({ navigation }) {

    const [inicial, setinicial] = useState('');
    

    const entrar = () => {
        
            navigation.replace('sobre');
        
    }
    
    return (
        <View style={estiloinicial.container}>
            <View style={estiloinicial.borda}>
            
            <ImageBackground source={require('../../../../assets/imgs/back2.gif')}style={estiloinicial.fundo}>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                
                <Text style={estiloinicial.texto}>Venha conhecer nosso projeto: Forno Solar</Text>
                <TouchableOpacity style={estiloinicial.botaoContainer} onPress={entrar}>
                <Text style={estiloinicial.botaoTexto }>Saiba mais</Text> 
                 
                </TouchableOpacity>
               </ImageBackground>
            </View>            
        </View>
    )
}

export default inicial;