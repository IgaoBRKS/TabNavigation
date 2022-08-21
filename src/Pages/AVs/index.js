import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Keyboard, ImageBackground} from 'react-native';
import { useState } from 'react';


export default function Avs() {
 
const [av1, setAv1] = useState(''); 
const [av2, setAv2] = useState('');
const [av3, setAv3] = useState('');
const [total, setTotal] = useState('0');


const x = parseFloat(total);
const por = x/3;
const status= ('');


 function res(){
  setTotal(Number(av1) + Number(av2) + Number(av3));



  if(por >= 6){
    alert('Aprovado')
  }if(por < 6){
    alert('Reprovado')
  }
}
  
  return (
    <View style={styles.container}>
      <Text style={{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 40,
        marginBottom: 10,
        }}>
        
      Calcule suas Notas </Text>
      <StatusBar style="auto" />
    

<TextInput
      style={styles.input}
      value={av1}
      onChangeText={(int) => setAv1(int)}
      placeholder= "Primeira Nota"
      keyboardType="numeric"
      />


<TextInput
      style={styles.input}
      value={av2}
      onChangeText={(int) => setAv2(int)}
      placeholder= "Segunda Nota"
      keyboardType="numeric"
      />


<TextInput
      style={styles.input}
      value={av3}
      onChangeText={(int) => setAv3(int)}
      placeholder= "Terceira Nota"
      keyboardType="numeric"
      />

<View>
  <Text style={styles.inputAnswer}> total: {total} </Text>
  <Text style={styles.inputAnswer}> Media: {por.toFixed(1)} </Text>

</View>
      
      
<TouchableOpacity 
style={styles.button}
onPress={res}>

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
    marginTop: 15,
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
    
  },
  inputAnswer:{
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 20,
    margin: 15,
    paddingLeft: 10,
    padding: 15,
    borderRadius: 8,
    color: '#121212',
    backgroundColor: '#FF8C00'
  }
});
