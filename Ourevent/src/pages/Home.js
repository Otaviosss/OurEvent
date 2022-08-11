import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import Eventos from '../components/Eventos';
import Recommended from '../components/Recommended';

export default function Home() {
 const navigation = useNavigation();

 return (
   <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    
    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        placeholder="O que está procurando?"
        style={styles.input}
        />
      </View>
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Adicionados recentemente</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15}}>
      <New
       cover={require('../../assets/pv1.jpg')} 
       name="Reunião Google"
       description="Reunião dos Membros do alto conselho do Google"
       onPress={() => navigation.navigate('Privados') }
      />

      <New
       cover={require('../../assets/pv2.jpg')} 
       name="Reunião Waze"
       description="Atualização dos termos do App"
       onPress={() => {}}
      />

      <New
       cover={require('../../assets/pv3.png')} 
       name="Lançamento Iphone"
       description="Evento de lançamento do novo iphone 14"
       onPress={() => {}}
      />

    </ScrollView>

    <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Próximos de você</Text>
    </View>  

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <Eventos
      cover={require('../../assets/pv4.png')}
      />
      <Eventos
      cover={require('../../assets/pv5.png')}
      />
      <Eventos
      cover={require('../../assets/pv6.png')}
      />
    </ScrollView>

    <Text style={[styles.title, { marginTop: 20 } ]}>
      Finalizados
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
      <Recommended
        cover={require('../../assets/pv1.jpg')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparecer"
      />
      <Recommended
        cover={require('../../assets/pv4.png')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparecer"
      />
      <Recommended
        cover={require('../../assets/pv6.png')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparacer"
      />
    </ScrollView>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 20, 
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor:  '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input:{
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#4f4a4a'
  }
});