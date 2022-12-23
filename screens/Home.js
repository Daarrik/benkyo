import React from 'react';
import { View } from 'react-native';
import {
  Container,
  HeaderBox,
  Backdrop,
  ListItem,
  BenkyoText,
} from '../components';
import { styles } from '../constants';

const { header, textBold, textCenter } = styles;

const Home = ({ navigation }) => {
  return (
    <Container>
      <Backdrop word="勉強" />
      <HeaderBox>
        <BenkyoText style={[header, textBold, textCenter]}>Benkyo</BenkyoText>
        <BenkyoText style={textCenter}>Japanese Study App</BenkyoText>
      </HeaderBox>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
        }}>
        <ListItem
          navigation={navigation}
          title="ランダム"
          subtitle="Random"
          screenToNavigate="Game"
          isRandom
        />
        <ListItem
          navigation={navigation}
          title="単語リスト"
          subtitle="Word List"
          screenToNavigate="List"
        />
        <ListItem
          navigation={navigation}
          title="やり方"
          subtitle="How to Play"
          screenToNavigate="HowTo"
        />
      </View>
    </Container>
  );
};

export default Home;
