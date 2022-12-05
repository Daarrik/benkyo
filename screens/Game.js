import React, { useState } from 'react';
import { StyleSheet, ToastAndroid, View, Text } from 'react-native';
import { KeyboardInput, Result, Button } from './../components';
import { kanjiList } from '../constants';

const Game = ({ navigation, route: { params } }) => {
  const { isRandom, selectedKanji } = params;

  const [kanjiEntry, setKanjiEntry] = useState(() => {
    if (isRandom) {
      return kanjiList[Math.floor(Math.random() * kanjiList.length)];
    } else {
      return {
        kanji: selectedKanji['kanji'],
        reading: selectedKanji['reading'],
      };
    }
  });
  const { kanji, reading } = kanjiEntry;

  // 0 = TextInput, 1 = Boxes
  const [inputMethod, setInputMethod] = useState(1);
  const [guess, setGuess] = useState('');
  const [guessed, setGuessed] = useState(false);
  const [attempts, setAttempts] = useState(1);

  const submitGuess = () => {
    if (guess === '') {
      ToastAndroid.showWithGravity(
        'Please type a guess.',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      return;
    }

    if (guess === reading) {
      setGuessed(true);
    } else {
      setAttempts(attempts => attempts + 1);
    }
  };

  const newGame = retry => {
    if (!isRandom) navigation.goBack();

    setGuess('');
    setGuessed(false);
    setAttempts(1);

    if (retry) return;
    const newEntry = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    setKanjiEntry(newEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.backdrop}>{kanji}</Text>
      <Text style={styles.text}>{isRandom ? 'Random' : 'Select'}</Text>
      <View style={styles.kanjiContainer}>
        <Text style={styles.kanji}>{kanji}</Text>
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
            <Button title="Submit" pressCallback={submitGuess} />
            <Text style={styles.text}>Attempt {attempts} of 3</Text>
            <Button
              passedStyles={{ position: 'absolute', bottom: -200, right: 0 }}
              title={isRandom ? 'Skip' : 'Back'}
              pressCallback={() => newGame(false)}
            />
          </>
        ) : (
          <Result
            isCorrect={reading === guess}
            isRandom={isRandom}
            newGame={newGame}
          />
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
  kanjiContainer: {
    padding: 5,
  },
  kanji: {
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
