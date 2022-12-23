import React from 'react';
import { FlatList } from 'react-native';
import { Container, Backdrop, ListItem } from '../components';
import { words } from '../constants';

const WordList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const { kanji } = item;

    return (
      <ListItem
        navigation={navigation}
        screenToNavigate="Game"
        title={kanji}
        selectedEntry={item}
      />
    );
  };

  return (
    <Container>
      <Backdrop word="リスト" />
      <FlatList
        key={item => item.kanji}
        data={words}
        renderItem={renderItem}
        windowSize={15}
        removeClippedSubviews={true}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      />
    </Container>
  );
};

export default WordList;
