import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estilosobre from './estilosobre';

function sobre({ navigation }) {
 
    
    return (
        <View style={estilosobre.container}>
            
            <View style={estilosobre.borda}>
                

                <Text style={estilosobre.texto}>O presente projeto foi desenvolvido com pensamento em proporcionar ao consumista uma
maneira de economizar na conta de luz e no gás de cozinha. Montou-se um protótipo de um sistema programado em arduino, combinando
tecnologia e técnicas especificas de mobilidade e funcionamento do circuito,
proporcionando a movimentação do prototipo para que o mesmo se encontre de frente a luz em diversas situações
</Text>

            </View>

        </View>
    )
}

export default sobre;