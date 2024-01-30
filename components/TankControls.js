// TankControls.js
import React from 'react';
import Button from './Button';

const TankControls = ({ handlePressIn, handlePressOut, drainWater }) => {
  return (
    <>
      <Button
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        text="Add Water"
        backgroundColor="green"
      />
      <Button onPress={drainWater} text="Drain Water" backgroundColor="red" />
    </>
  );
};

export default TankControls;
