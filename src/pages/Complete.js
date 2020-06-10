import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import bannerImg from '../assets/rest.png';

function formatSeconds(seconds) {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

const Complete = () => {
  const navigation = useNavigation();
  const timeRef = useRef();

  const [secondsElapsed, setSecondsElapsed] = useState(300);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setSecondsElapsed(state => state - 1);
    }, 1000);
  }, []);

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
        POMO<Text style={styles.thinTitle}>DORA</Text>
      </Text>

      <View>
        <Text style={styles.text}>Great job!!!</Text>
        <Text style={styles.text}>You can rest now 💆‍♂️</Text>
      </View>


      <Image style={styles.banner} source={bannerImg} />

      {
        secondsElapsed > 0
        ?
          <TouchableOpacity style={styles.buttonDisabled} disabled>
            <Text style={styles.textButton}>{formatSeconds(secondsElapsed)}</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity style={styles.button} onPress={navigateToTime}>
            <Text style={styles.textButton}>I'm ready to work again</Text>
          </TouchableOpacity>
      }
      
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
    color: '#E04A59',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 100,
  },
  
  thinTitle: {
    color: '#E04A59',
    fontSize: 28,
    fontWeight: '100',
  },

  text: {
    color: '#B1B6CF',
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  
  button: {
    width: 275,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E04A59',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  
  buttonDisabled: {
    width: 275,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E04A59',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    opacity: .5,
  },

  textButton: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default Complete;