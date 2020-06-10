import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import bannerImg from '../assets/focus.png';

const Welcome = () => {
  const navigation = useNavigation();

  function navigateToTime() {
    navigation.navigate('Timer');
  }

  return (
    <LinearGradient
      colors={['#2E324B', '#595E7A']}
      start={[1.0, 1.0]}
      style={styles.container}
    >
      <Text style={styles.title}>
        Even when we work on the dream job, staying productive can be tiring
      </Text>

      <TouchableOpacity style={styles.button} onPress={navigateToTime}>
        <MaterialIcons name="chevron-right" size={32} color="#FFF" />
      </TouchableOpacity>

      <Image source={bannerImg} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: '#A9AFD0',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    maxWidth: 280,
    marginVertical: 100,
  },
  
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E04A59',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;