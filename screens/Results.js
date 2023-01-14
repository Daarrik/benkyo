import React from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Backdrop,
  HeaderBox,
  ListItem,
  BenkyoText,
  BenkyoButton,
} from '../components';
import { styles } from '../constants';

const { header3, textBold, textCenter } = styles;

const Results = ({ navigation, route: { params } }) => {
  const { testedWords } = params;
  const renderItem = ({ item }) => {
    const { kanji } = item;

    return (
      <ListItem
        navigation={navigation}
        screenToNavigate="Game"
        title={kanji}
        selectedEntry={item}
        subtitle={!item.correct && 'Incorrect'}
      />
    );
  };

  return (
    <Container>
      <Backdrop word="成績" />
      <HeaderBox>
        <BenkyoText style={[header3, textBold, textCenter]}>Results</BenkyoText>
      </HeaderBox>
      <FlatList
        key={item => item.kanji}
        data={testedWords}
        renderItem={renderItem}
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      />
      <BenkyoButton
        style={{ marginTop: 20 }}
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </Container>
  );
};

export default Results;
