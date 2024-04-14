import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from '../app/startScren';
import LoginScreen from '../app/login';
import {
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const Navigator = () => {
  const [currentScreen, setCurrentScreen] = useState('Splash');
  const progress = useSharedValue(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('Login');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentScreen === 'Login') {
      progress.value = withTiming(1, {
        duration: 400,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [currentScreen]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: progress.value,
          },
        ]}
      >
        {currentScreen === 'Splash' ? <SplashScreen /> : <LoginScreen />}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navigator;
