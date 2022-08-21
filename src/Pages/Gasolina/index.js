import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
import { useState } from 'react';

export default function Gasolina() {

  const [gasolina, setGasolina] = useState("")
  const [etanol, setEtanol] = useState("")
  const [result, setResult] = useState("Resultado")

  const executarResult =()=>{

  let gas = gasolina/100
  let eta = etanol/100
  let ResultadoF = (eta/gas);

  
    
  if (ResultadoF >= 70/100){
    alert('Compensa usar a Gasolina!')
  }else {
    alert('Compensa usar o Etanol!')
  }

  }


  return (
    <View style={styles.container}>

      <Text style={{
        marginTop: 40,
        marginBottom:10,
        textAlign:'center',
        fontSize: 20,
        color: "white",
        }}>
        
         Comparador de Preços </Text>
      
      <Text style={styles.title}> Gasolina (preço por litro) </Text>
      <TextInput style={styles.input}
      placeholder='R$ 0,00'
      value={gasolina}
      onChangeText={setGasolina}
      keyboardType="numeric"/>

      
      
      <Text style={styles.title}> Etanol (preço por litro) </Text>
      <TextInput style={styles.input}
      placeholder='R$ 0,00'
      value={etanol}
      onChangeText={setEtanol}
      keyboardType="numeric"/>

      <Text style={styles.resultado} onPress={executarResult}> {result} </Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    color: "white",
  },

  input: {
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 20,
    margin: 15,
    paddingLeft: 10,
    padding: 6,
    borderRadius: 8,
    color: '#121212',
    backgroundColor: '#ffffff'
  },

  resultado: {
    position: 'absolute',
    fontSize: 20,
    backgroundColor: "#48D1CC",
    color: "#121212",
    right: 25,
    bottom: 25,
    borderRadius: 8,
    padding: 6,
  },

  img: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
  },

});
