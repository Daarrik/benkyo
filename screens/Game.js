import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, ToastAndroid, View, Text } from 'react-native';
import { KeyboardInput, Result, Button } from './../components';
import { kanjiList, kana } from '../constants';
import { shuffle } from '../constants/shuffle';
import DuoDragDrop from '@jamsch/react-native-duo-drag-drop';

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

  const [textInput, setTextInput] = useState(true);
  const [guess, setGuess] = useState('');
  const [guessed, setGuessed] = useState(false);
  const [attempts, setAttempts] = useState(1);

  const ref = useRef(null);

  const generateBoxes = useCallback(() => {
    wrongAnswers = [];
    for (let i = 0; i < 7 - reading.length; i++)
      wrongAnswers.push(kana.charAt(Math.random() * kana.length));

    const answers = shuffle(reading.split('').concat(wrongAnswers));
    return answers;
  });

  const [boxes, setBoxes] = useState(generateBoxes());

  useEffect(() => {
    setBoxes(generateBoxes());
  }, [kanjiEntry]);

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
    if (!isRandom && !retry) navigation.goBack();

    setGuess('');
    setGuessed(false);
    setAttempts(1);

    if (retry) return;
    const newEntry = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    setKanjiEntry(newEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={kanji.length === 2 ? styles.backdrop : styles.backdrop2}>
        {kanji}
      </Text>
      <Text style={styles.text}>{`( ${isRandom ? 'Random' : 'Select'} )`}</Text>
      <Text style={{ ...styles.text, paddingBottom: 10, textAlign: 'left' }}>
        What is the reading of this word?
      </Text>
      <Text style={styles.kanji}>{kanji}</Text>
      {!guessed && attempts <= 3 ? (
        <>
          {textInput ? (
            <View style={styles.main}>
              <KeyboardInput
                guess={guess}
                setGuess={setGuess}
                submitGuess={submitGuess}
              />

              <Button title="Submit" pressCallback={submitGuess} />
            </View>
          ) : (
            <>
              <DuoDragDrop
                ref={ref}
                words={boxes}
                onDrop={() => setGuess(ref.current.getAnsweredWords().join(''))}
                wordHeight={42}
                renderPlaceholder={({ style }) => (
                  <View
                    style={{
                      ...style,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      opacity: 0.25,
                    }}
                  />
                )}
              />
              <View style={styles.main}>
                <Button title="Submit" pressCallback={() => submitGuess()} />
              </View>
            </>
          )}
          <Text style={styles.text}>Attempt {attempts} of 3</Text>
          {isRandom && (
            <Button
              passedStyles={{ position: 'absolute', bottom: 0, right: 0 }}
              title="Skip"
              pressCallback={() => newGame(false)}
            />
          )}
          <Button
            passedStyles={{ position: 'absolute', bottom: 0, left: 0 }}
            title="Switch"
            pressCallback={() => setTextInput(!textInput)}
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
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor: '#001220',
  },
  kanji: {
    padding: 5,
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
  backdrop2: {
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

export default Game;
