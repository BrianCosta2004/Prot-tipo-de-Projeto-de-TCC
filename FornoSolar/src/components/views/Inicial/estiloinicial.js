import { StyleSheet } from 'react-native';

const estiloinicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   fundo: {
       justifyContent: 'center',
       height: '100%',
       width: '100%',
   },
   borda: {   
      backgroundColor: '#081a31',  
      width: '100%',
      height: '100%',
      justifyContent: 'center',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   logoContainer:{
       alignItems: 'center',
       marginBottom: 30,
   },
   campoContainer: {
       flexDirection: 'row',
       padding: 10,
       paddingLeft: 50,
       paddingRight: 50,
       margin: 10,
       borderRadius: 15,
       alignItems: 'center',
   },
   campo: {
      fontSize: 18,
      color: '#FFFFFF',
      marginLeft: 15,    
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: 'yellow',
      
    },
    texto: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoContainer: {
      marginTop: 5,
      marginBottom: 2,
      marginLeft: 80,
      marginRight: 80,
      borderRadius: 50,
      height: 40,
      borderWidth: 2,
      borderColor: 'yellow',
      backgroundColor: '#FFa500',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
   },
});

  export default estiloinicial;