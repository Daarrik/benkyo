import React from 'react';
import { Text } from 'react-native';
import { styles } from '../constants';

const { backdropCommon, backdrop2Char, backdrop3Char } = styles;

const Backdrop = ({ word }) => {
  return (
    <Text
      style={[
        backdropCommon,
        word.length === 2 ? backdrop2Char : backdrop3Char,
      ]}>
      {word}
    </Text>
  );
};

export default Backdrop;
