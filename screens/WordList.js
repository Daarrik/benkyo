import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ListItem } from './../components';
import { kanjiList } from '../constants';

const WordList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ListItem navigation={navigation} selectedKanji={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.backdrop}>リスト</Text>
      <FlatList
        data={kanjiList}
        renderItem={renderItem}
        key={item => item.kanji}
        windowSize={15}
        indicatorStyle={'white'}
        removeClippedSubviews={true}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor: '#001220',
  },
  backdrop: {
    position: 'absolute',
    left: -40,
    bottom: -90,
    paddingTop: 150,
    zIndex: -1,
    fontSize: 250,
    lineHeight: 230,
    opacity: 0.65,
  },
});

export default WordList;