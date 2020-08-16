import React, { useState } from 'react';
import { View, Alert, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

import Constants from 'expo-constants';

import api from '../services/api';

export default function Book({ navigation, route }) {
  const [date, setDate] = useState('');

  const id = route.params.id; // antigo navigation.getParam('id');

  async function handleSubmmit() {
    const user_id = await AsyncStorage.getItem('user');

     await api.post(`/spots/${id}/bookings`, {
       date
     }, {
       header: { user_id }
     });

     Alert.alert('Solicitação de reserva enviada.');

     navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>DATA DE INTERESSE *</Text>
        <TextInput 
          style={styles.input}
          placeholder='Qual data você quer reservar?'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

        <TouchableOpacity onPress={handleSubmmit} style={styles.button}>
          <Text style={styles.buttonText}>Solicitcar reserva</Text>  
        </TouchableOpacity>
        
        {/* array de estilos */}
        <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancelar</Text>  
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    margin: 30,
    marginTop: 50
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8
  },

  input: {
    borderWidth: 1, // propriedades separadas
    borderColor: '#DDD',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#F05A5B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  
  cancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10
  },

  buttonText: { // não herda propriedades do pai
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});