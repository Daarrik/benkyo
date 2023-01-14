import React from 'react';
import { View } from 'react-native';
import { styles } from '../constants';

const { headerBox } = styles;

const HeaderBox = ({ style, children }) => {
  return <View style={[headerBox, style]}>{children}</View>;
};

export default HeaderBox;
