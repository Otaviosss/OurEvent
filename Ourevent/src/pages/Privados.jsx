import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Dt from '../components/Detalhes';

export default function Privados(){
    return (
        <View>
        <Dt
            source={props.cover}
            cover={require ('../../assets/pv1.jpg')}
        />
        </View>
    );
}