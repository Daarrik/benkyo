import React from 'react';
import { View } from 'react-native';
import { styles } from '../constants';

const { headerBox } = styles;

const HeaderBox = ({ children }) => {
  return <View style={headerBox}>{children}</View>;
};

export default HeaderBox;
