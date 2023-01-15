import React from 'react';
import { Text } from 'react-native';
import { styles } from '../../constants';

const { benkyoText } = styles;

const BenkyoText = ({ style, children }) => {
  return <Text style={[benkyoText, style]}>{children}</Text>;
};

export default BenkyoText;
