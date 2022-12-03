import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const HomeItem = ({
  navigation,
  itemTitle,
  itemSubtitle,
  screenToNavigate,
  isRandom,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screenToNavigate, { isRandom: isRandom })
      }
      style={{ paddingBottom: 25 }}>
      <Text style={styles.itemTitle}>{itemTitle}</Text>
      <Text style={styles.itemSubtitle}>{itemSubtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: '#dadce1',
  },
  itemSubtitle: {
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '400',
    color: '#dadce1',
    textAlign: 'right',
  },
});

export default HomeItem;
