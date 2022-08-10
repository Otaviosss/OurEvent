import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Button,} from 'react-native';

export default function App( {navigation} ) {
  return (
    <KeyboardAvoidingView style={Styles.background}>
      <View style ={Styles.logo}>
        <Image
        source={require('../../imgs/logo-ex.png')}
        />
        </View>

        <View style= {Styles.entrada}>
        <TextInput
        style={Styles.Input}
        placeholder='Entrar com o Google'
        autoCorrect={false}
        onChange={()=> {}}
        />
        <TextInput
        style={Styles.Input1}
        placeholder='Entrar com o Facebook'
        autoCorrect={false}
        onChange={()=> {}}
        />

        <Text style={Styles.tex}>----------------------------------------- OU ----------------------------------------</Text>
        
        <TextInput
        style={Styles.Input}
        placeholder='Email'
        autoCorrect={false}
        onChange={()=> {}}
        />
        <TextInput
        style={Styles.Input}
        placeholder='Senha'
        autoCorrect={false}
        onChange={()=> {}}
        />

        <Button
        style={Styles.botao}
        title="Entrar"
        onPress={ () => navigation.navigate('Home')}
        />

        <TouchableOpacity style={Styles.botin2}>
        <Text style={Styles.textin2}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.botin3}>
        <Text style={Styles.textin3}>Redefinir senha</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  logo:{
    justifyContent: 'center',
  },
  entrada:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  Input:{
  backgroundColor: '#fff',
  width:'90%',
  height:'5%',
  marginBottom:15,
  color:'#222',
  fontSize:17,
  borderRadius: 7,
  padding:6,
  },
 Input1:{
    backgroundColor: '#fff',
    width:'90%',
    height:'5%',
    color:'#222',
    fontSize:17,
    borderRadius: 7,
    padding:6,
    },
tex:{
    alignContent: 'center',
    color:'white',
    margin:50,
    width:'100%',
    },
textin:{
    color: '#FFF',
    fontSize: 18,
  },
textin2:{
    color: '#FFF',
    fontSize: 18,
  },
textin3:{
    color: '#FFF',
    fontSize: 12,
  },
  botin:{
    backgroundColor: '#35AAFF',
    width: '35%',
    height: 45,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom:15,
  },

  botin2:{
    backgroundColor: '#35AAFF',
    width: '35%',
    height: 45,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom:15,
  },
  botin3:{
    color:'white',
    width: '45%',
    height: 45,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 7,
  }
});


