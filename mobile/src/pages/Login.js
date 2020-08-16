import React, { useState, useContext } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { SessionContext } from '../context/Session';

import logo from '../assets/logo.png';

export default function Login() {
  // estado = informação mantida pelo componente
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');
  
  const { signIn } = useContext(SessionContext);

  function handleSubmmit() {
    signIn(email, techs);
  }

  return (
    // No Android é padrão
    <KeyboardAvoidingView  enabled={Platform.OS === 'ios'} behavior='padding' style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput 
          style={styles.input}
          placeholder='Seu e-mail'
          placeholderTextColor='#999'
          keyboardType='email-address' // começa o teclado no formato de e-mail
          autoCapitalize='none' // nenhuma letra em caps
          autoCorrect={false}
          value={email}
          // onChangeText={text => setEmail(text)}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>TECNOLOGIAS *</Text>
        <TextInput 
          style={styles.input}
          placeholder='Tecnologias de interesse'
          placeholderTextColor='#999'
          autoCapitalize='words' // coloca a primeira letra de cada palavra em maiúsculo
          autoCorrect={false}
          value={techs}
          // onChangeText={techs => setEmail(techs)}
          onChangeText={setTechs}
        />

        <TouchableOpacity onPress={handleSubmmit} style={styles.button}>
          <Text style={styles.buttonText}>Encontrar spots</Text>  
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo o tamanho da tela
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch', // ocupa a largura inteira possível
    // padding: 0 30,
    paddingHorizontal: 30, // somente nas laterais
    marginTop: 30
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

  buttonText: { // não herda propriedades do pai
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});