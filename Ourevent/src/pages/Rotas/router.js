import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import BemVindo from "../Welcome/index";
import Login from "../Logando/login";
import Home from '../Home';
import Event from '../Event';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component={BemVindo}
                options={{headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false }}
            />
            <Stack.Screen 
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
                <Stack.Screen 
                name="Eventos Privados" 
                component={Event}
                options={{headerShown: false }}
                />
        </Stack.Navigator>
    );
}