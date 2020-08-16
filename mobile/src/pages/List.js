import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, StyleSheet, AsyncStorage } from 'react-native';
import Constants from 'expo-constants'

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState([]); 

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      {/* cria scroll vertical */}
      <ScrollView> 
        {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight, // SafeAreaView para Android
    flex: 1
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
});