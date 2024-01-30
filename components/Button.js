// Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPressIn, onPressOut, onPress, text, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 2.5,
    borderRadius: 5,
    margin: 10,
    fontSize: 2.5,
  },
});

export default Button;
