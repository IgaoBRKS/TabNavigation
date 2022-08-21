import react from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Home(){
return(
    <View style={styles.container}>
        <Text style={styles.title}> App de Calculadoras </Text>
    

        <TextInput 
        style={styles.input}
        placeholder='Usuário'
        //Value={}
        //onPress={}
        />

        <TextInput 
        style={styles.input}
        placeholder='Senha'
        //Value={}
        //onPress={}
        />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.senha}>Esqueceu a conta ?</Text>
        </TouchableOpacity>
    
    
    </View>


    
);
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        
    },
    title:{
        fontSize: 25,
        textAlign: 'center', 
        color: '#ffffff',
        marginTop: 40,
        marginBottom: 40,
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
        backgroundColor: '#48D1CC',
        borderWidth: 1,
        fontSize: 20,
        marginTop: 40,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        paddingLeft: 10,
        padding: 6,
        borderRadius: 8,
    },
    buttonText:{
        fontSize: 20,
        textAlign: 'center',
        color:'#121212'
    },
    senha:{
        color: '#ffffff',
        textAlign: 'center',
        
    }
});