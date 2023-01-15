import React from 'react';
import { View } from 'react-native';
import { Container, HeaderBox, Backdrop, BenkyoText } from '../components';
import { styles } from '../constants';

const { header3, textBold, textCenter } = styles;

const HowTo = () => {
  return (
    <Container>
      <Backdrop word={'やり方'} />
      <HeaderBox>
        <BenkyoText style={[header3, textBold, textCenter]}>
          How to Play
        </BenkyoText>
      </HeaderBox>
      <View>
        <BenkyoText>
          {'\t'.repeat(2)}
          <BenkyoText style={textBold}>Benkyo</BenkyoText> is an app for
          studying Japanese words in their Kanji form, built for those familiar
          with the Hiragana writing system and basic Jōyō Kanji (常用漢字). If
          you are unfamiliar with hiragana and/or Kanji, you can study (some of)
          it here or use other fantastic Japanese-specific language learning
          resources! {'\n'.repeat(2)}
          {'\t'.repeat(2)}To begin, select Random (ランダム) or Word List
          (単語リスト) on the Home screen. Random will test you with ten random
          words from a list of 800+. In the Word List you can choose a specific
          word from the list to study. The{' '}
          <BenkyoText style={textBold}>goal</BenkyoText> is to input the correct
          hiragana reading for the given word. You will be able to see your
          results at the end.
        </BenkyoText>
      </View>
    </Container>
  );
};

export default HowTo;