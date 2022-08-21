import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function IMC() {
 
 const [peso, setPeso] = useState('') 
 const [altura, setAltura] = useState('')

 function handleSubmit(){
   const alt = altura / 100;
   const imc = peso / (alt + alt);

   if(imc < 18.6){
     alert('Você está abaixo do Peso ' + imc.toFixed(2))
   }else if(imc >= 18.6 && imc < 24.9){
     alert('Você está no Peso Ideal ' +imc.toFixed(2))
   }else if(imc >= 24.9){
     alert('Você esta levemente acima do Peso ' + imc.toFixed(2))
   }
 }
  
  
   return (
    <View style={styles.container}>
      <Text style={styles.title}> Calcule Seu IMC </Text>
      <StatusBar style="auto" />
    
<TextInput
      style={styles.input}
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      placeholder= "Peso (Kg)"
      keyboardType="numeric"
      />

<TextInput
      style={styles.input}
      value={altura}
      onChangeText={(altura) => setAltura(altura)}
      placeholder= "Altura (cm)"
      keyboardType="numeric"
      />
      
      
<TouchableOpacity 
style={styles.button}
onPress={handleSubmit}>

    <Text style={styles.buttonText}> Cadastrar </Text>
</TouchableOpacity>   
    
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#121212',
    
  },
  title:{
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    fontSize: 20,
    color: '#ffffff'
  },
  input:{
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
  button:{
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: '#48D1CC',
    borderRadius: 8,
    padding: 6,
  },
  buttonText:{
    fontSize: 20,
    
  }
});
