import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native'


import Home from '../src/pages/Home';
import Privados from '../src/pages/Privados';

const stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    title: 'Home',
                    headerBackTitleStyle:{
                    },
                    headerRight: () => (
                        <TouchableOpacity>
                            <Feather
                            name="user"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <stack.Screen 
                name="Eventos Privados" 
                component={Privados}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;