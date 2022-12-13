import React, { useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';

const ListItem = ({ navigation, selectedKanji }) => {
  const openWord = useCallback(() => {
    navigation.navigate('Game', { selectedKanji });
  }, []);

  return (
    <Text style={styles.itemTitle} onPress={openWord}>
      {selectedKanji['kanji']}
    </Text>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    paddingHorizontal: 15,
    fontSize: 60,
    fontWeight: '400',
    color: '#dadce1',
  },
});

export default ListItem;
