import React from 'react';
import { Pressable } from 'react-native';
import { BenkyoText } from '.';
import { styles } from '../constants';

const { button, textBold, textCenter } = styles;

const BenkyoButton = ({ style, title, onPress }) => {
  return (
    <Pressable style={[button, style]} onPress={onPress}>
      <BenkyoText style={[textBold, textCenter]}>{title}</BenkyoText>
    </Pressable>
  );
};

export default BenkyoButton;
