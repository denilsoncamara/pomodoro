import React, { useState, useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';

function formatSeconds(seconds) {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

const Timer = () => {
  const navigation = useNavigation();
  const timeRef = useRef();
  
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  
  function navigationToComplete() {
    if (secondsElapsed >= 1500) {
      navigation.navigate('Complete');
    }
  }

  function toggleTimer() {
    if (timerEnabled) {
      clearInterval(timeRef.current);

      setTimerEnabled(false);
    } else {
      timeRef.current = setInterval(() => {
        setSecondsElapsed(state => state + 1);
      }, 1000);
      
      setTimerEnabled(true);
    }
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

      <AnimatedCircularProgress
        style={styles.timer}
        size={250}
        width={125}
        fill={(secondsElapsed * 100) / 1500}
        rotation={0}
        tintColor="#333750"
        backgroundColor="#454A6B"
        onAnimationComplete={navigationToComplete}
      />
      <Text style={styles.timeText}>{formatSeconds(secondsElapsed)}</Text>

      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
          <MaterialIcons name={!timerEnabled ? "play-arrow" : "pause"} size={32} color="#FFF" />
      </TouchableOpacity>
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
    marginTop: 100,
  },
  
  thinTitle: {
    color: '#E04A59',
    fontSize: 28,
    fontWeight: '100',
  },
  
  timer: {
    marginTop: 40,
    borderWidth: 30,
    borderColor: '#8087B4',
    borderRadius: 300,
    shadowColor: "#222535",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },

  timeText: {
    fontSize: 50,
    color: '#FFF',
    fontWeight: 'bold',
  },

  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E04A59',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
});

export default Timer;