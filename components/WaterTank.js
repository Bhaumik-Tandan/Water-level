// WaterTank.js
import React from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

const WaterTank = ({ animatedValue }) => {
  const waterLevel = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.tank}>
      <Animated.View style={[styles.water, { height: waterLevel }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  tank: {
    width: 50,
    height: 75,
    backgroundColor: 'grey',
    overflow: 'hidden',
  },
  water: {
    backgroundColor: 'blue',
  },
});

export default WaterTank;
