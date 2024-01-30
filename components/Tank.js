// Tank.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import TankControls from './TankControls';
import WaterTank from './WaterTank';

const Tank = () => {
  const [animatedValue] = useState(new Animated.Value(0));
  const [isAddingWater, setIsAddingWater] = useState(false);

  useEffect(() => {
    let interval;

    if (isAddingWater) {
      interval = setInterval(() => {
        addWater(200);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isAddingWater]);

  const addWater = (amount) => {
    animatedValue.setValue(animatedValue._value + amount / 1000);
    Animated.timing(animatedValue, {
      toValue: animatedValue._value + amount / 1000,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const drainWater = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const handlePressIn = () => {
    setIsAddingWater(true);
  };

  const handlePressOut = () => {
    setIsAddingWater(false);
  };

  return (
    <View style={styles.container}>
      <TankControls
        handlePressIn={handlePressIn}
        handlePressOut={handlePressOut}
        drainWater={drainWater}
      />
      <WaterTank animatedValue={animatedValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tank;
