import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { KeyboardInput, Submit } from './../components';

const Game = ({ route: { params } }) => {
  const { random, selectedKanji } = params;
  const [kanjiEntry, setKanjiEntry] = useState(
    random
      ? {
          kanji: '漢字',
          reading: 'かんじ',
        }
      : { kanji: selectedKanji['kanji'], reading: selectedKanji['reading'] },
  );
  const { kanji, reading } = kanjiEntry;

  const [guess, setGuess] = useState('');
  const [guessed, setGuessed] = useState(false);

  // 0 = TextInput, 1 = Boxes
  const [inputMethod, setInputMethod] = useState(1);
  const [attempts, setAttempts] = useState(1);

  const submitGuess = () => {
    if (guess === '') return;

    if (guess === reading) {
      setGuessed(true);
    } else {
      setAttempts(attempts => attempts + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.backdrop}>{kanji}</Text>
      <Text style={styles.text}>{random ? 'Random' : 'Select'}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{kanji}</Text>
      </View>
      <View style={styles.main}>
        {!guessed && attempts <= 3 ? (
          <>
            {/* box/textinput logic here */}
            <KeyboardInput
              guess={guess}
              setGuess={setGuess}
              submitGuess={submitGuess}
            />
            <Submit submitGuess={submitGuess} />
            <Text style={styles.text}>Attempt {attempts} of 3</Text>
          </>
        ) : (
          <Text style={styles.text}>
            {reading === guess ? 'correct' : 'incorrect'}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    padding: 24,
    backgroundColor: '#001220',
  },
  titleContainer: {
    padding: 5,
  },
  title: {
    fontSize: 100,
    fontWeight: '400',
    textAlign: 'center',
    color: '#dadce1',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#dadce1',
    textAlign: 'center',
  },
  main: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
  backdrop: {
    position: 'absolute',
    left: -40,
    bottom: -90,
    paddingTop: 150,
    zIndex: -1,
    fontSize: 350,
    lineHeight: 330,
    opacity: 0.65,
  },
});

export default Game;
