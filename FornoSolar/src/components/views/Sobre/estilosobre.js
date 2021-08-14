import { StyleSheet } from 'react-native';

const estilosobre = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'     
   },
   borda: {   
      backgroundColor: '#ffa500',  
      width: '80%',
      height: 425,
      borderRadius: 50,
   },
   texto: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   fundo: {
       justifyContent: 'center',
       height: '100%',
       width: '100%',
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: 'yellow',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
   },
   botaoTexto: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold'
   },
});

  export default estilosobre;