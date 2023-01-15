import React from 'react';
import { View } from 'react-native';
import { styles } from '../../constants';

const { statusContainer, statusBar } = styles;

const GameStatus = ({ fillAmount }) => {
  return (
    <View style={statusContainer}>
      <View style={[statusBar, { width: (fillAmount + 1) * 10 + '%' }]} />
    </View>
  );
};

export default GameStatus;
