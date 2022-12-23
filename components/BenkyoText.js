import React from 'react';
import { Text } from 'react-native';
import { styles } from '../constants';

const { text } = styles;

const BenkyoText = ({ style, children }) => {
  return <Text style={[text, style]}>{children}</Text>;
};

export default BenkyoText;
