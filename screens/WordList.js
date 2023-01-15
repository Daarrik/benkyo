import React from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Backdrop,
  HeaderBox,
  ListItem,
  BenkyoText,
} from '../components';
import { words, styles } from '../constants';

const { header3, textBold, textCenter } = styles;

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
      <HeaderBox style={{ marginTop: 10 }}>
        <BenkyoText style={[header3, textBold, textCenter]}>
          Word List
        </BenkyoText>
      </HeaderBox>
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
