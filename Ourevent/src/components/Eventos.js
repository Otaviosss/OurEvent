import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function Eventos({ cover }) {
 return (
   <View style={styles.container}>
     <View>
       <Image
       source={cover}
       style={styles.cover}
       />
     </View>

     <View style={styles.content}>
     <Text style={styles.description}>
        Super fest
      </Text>
      <Text style={styles.description2}>
        Maior Evento de Campinas
      </Text>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: 260,
    height: 70,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 2,
    borderRadius: 10,
  },
  cover:{
    borderRadius: 10,
    width: 60,
    height: 60
  },
  content:{
    width: '65%',
    justifyContent:'flex-end',
    paddingHorizontal: 10,
    height: '100%'
  },
  description:{
    flex: 1,
    fontSize: 15,
    alignContent: 'flex-start'
  },
  description2:{
    flex: 1,
    fontSize: 9,
    alignContent: 'flex-start'
  },
  price:{
    fontSize: 12,
  }
});