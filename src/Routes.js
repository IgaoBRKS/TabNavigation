import React from 'react';
import { createBottomTabNavigator } from  '@react-navigation/bottom-tabs';
import Home from './Pages/Home';
import AVs from './Pages/AVs';
import Gasolina from './Pages/Gasolina';
import IMC from './Pages/IMC';

import {Entypo, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    
    return(
        <Tab.Navigator
        tabBarOptions={{
            borderRadius: 8 ,  
            
            color:'#ffffff',
            borderTopColor: 'transparent',
            
            activeTintColor: '#48D1CC',
            paddingTop: 5,
            
        }}
            
            
            barStyle={{backgroundColor: '#121212'}}
        >    
        
            <Tab.Screen 
            name ="Inicio" 
            component={Home}
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Entypo name ="home" size={size} color={color} />
                )
            }} 
            />

            <Tab.Screen 
            name ="AVs" 
            component={AVs}
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Entypo name ="open-book" size={size} color={color} />
                )
            }}  
            />

            <Tab.Screen 
            name ="Combustível" 
            component={Gasolina}
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Entypo name ="credit" size={size} color={color} />
                )
            }}  
            /> 

            <Tab.Screen 
            name ="IMC" 
            component={IMC}
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Entypo name ="man" size={size} color={color} />
                )
            }}  
            />
        </Tab.Navigator>
    )
}