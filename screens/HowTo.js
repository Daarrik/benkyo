import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HowTo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.backdrop}>やり方</Text>
      <Text style={{ ...styles.title }}>How to Play</Text>
      <View style={styles.main}>
        <Text style={styles.text}>
          {'\t'.repeat(2)}
          <Text style={{ fontFamily: 'Nunito-Bold' }}>Benkyo</Text> is an app
          for studying Japanese words in their Kanji form, built for those
          familiar with the Hiragana writing system and basic Jōyō Kanji
          (常用漢字). If you are unfamiliar with hiragana and/or Kanji, you can
          study (some of) it here or use other fantastic Japanese-specific
          language learning resources! {'\n'.repeat(2)}
          {'\t'.repeat(2)}To begin, select Random (ランダム) or Word List
          (単語リスト) on the Home screen. Random (appropriately named) will
          provide random words from a list of 800+. In the Word List you can
          choose a specific word from the list to study. The{' '}
          <Text style={{ fontFamily: 'Nunito-Bold' }}>goal</Text> is to input
          the correct hiragana reading for the given word within 3 attempts.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingTop: 25 }}>
          <Text style={{ ...styles.title }}>戻る</Text>
          <Text
            style={{
              ...styles.text,
              paddingLeft: 10,
              textAlign: 'center',
            }}>
            Return
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor: '#161f23',
  },
  title: {
    padding: 5,
    fontFamily: 'Nunito-Bold',
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    color: '#dadce1',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
    color: '#dadce1',
    lineHeight: 22,
  },
  main: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  backdrop: {
    position: 'absolute',
    left: -40,
    bottom: -90,
    paddingTop: 150,
    zIndex: -1,
    fontSize: 250,
    lineHeight: 230,
    opacity: 0.5,
  },
});

export default HowTo;
