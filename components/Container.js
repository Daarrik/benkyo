import React from 'react';
import { View } from 'react-native';
import { styles } from '../constants';

const { container } = styles;

const Container = ({ children }) => {
  return <View style={container}>{children}</View>;
};

export default Container;
