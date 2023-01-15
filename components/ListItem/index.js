import React from 'react';
import { Pressable } from 'react-native';
import { BenkyoText } from '..';
import { styles } from '../../constants';

const { header2, textBold, textCenter } = styles;

const ListItem = ({
  navigation,
  screenToNavigate,
  title,
  subtitle,
  isRandom,
  selectedEntry,
}) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(screenToNavigate, {
          isRandom: isRandom,
          selectedEntry: selectedEntry,
        })
      }
      style={{ marginVertical: 5 }}>
      <BenkyoText style={[header2, textBold, textCenter]}>{title}</BenkyoText>
      {subtitle && <BenkyoText style={textCenter}>{subtitle}</BenkyoText>}
    </Pressable>
  );
};

export default ListItem;
