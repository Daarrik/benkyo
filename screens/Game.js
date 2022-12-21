import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, ToastAndroid, View, Text } from 'react-native';
import { KeyboardInput, Result, Button } from './../components';
import { words, kana } from '../constants';
import DuoDragDrop from '@jamsch/react-native-duo-drag-drop';

const Game = ({ navigation, route: { params } }) => {
  const { isRandom, selectedKanji } = params;

  const [kanjiEntry, setKanjiEntry] = useState(() => {
    if (isRandom) {
      return words[Math.floor(Math.random() * words.length)];
    } else {
      return {
        kanji: selectedKanji['kanji'],
        reading: selectedKanji['reading'],
      };
    }
  });
  const { kanji, reading } = kanjiEntry;

  const [textInput, setTextInput] = useState(false);
  const [guess, setGuess] = useState('');
  const [guessed, setGuessed] = useState(false);
  const [attempts, setAttempts] = useState(1);

  const ref = useRef(null);

  const generateBoxes = useCallback(() => {
    if (reading.length >= 7) return shuffle(reading.split(''));

    wrongAnswers = [];
    for (let i = 0; i < 7 - reading.length; i++)
      wrongAnswers.push(kana.charAt(Math.random() * kana.length));

    const answers = shuffle(reading.split('').concat(wrongAnswers));
    return answers;
  });

  const [boxes, setBoxes] = useState(() => generateBoxes());

  useEffect(() => {
    setBoxes(generateBoxes());
  }, [kanjiEntry]);

  const submitGuess = () => {
    if (guess === '') {
      ToastAndroid.show('Please input a guess.', ToastAndroid.SHORT);
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
    const newEntry = words[Math.floor(Math.random() * words.length)];
    setKanjiEntry(newEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={kanji.length === 2 ? styles.backdrop : styles.backdrop2}>
        {kanji}
      </Text>
      <Text
        style={{
          ...styles.text,
          paddingBottom: 10,
          textAlign: 'left',
          fontFamily: 'Nunito-Light',
        }}>
        {isRandom ? 'Random Mode' : 'Selected Mode'}
      </Text>
      <Text
        style={{
          ...styles.text,
          paddingBottom: 10,
          textAlign: 'left',
          fontFamily: 'Nunito-Bold',
        }}>
        What is the reading of this word?
      </Text>
      <Text style={styles.kanji}>{kanji}</Text>
      {attempts <= 3 && (
        <Text
          style={{
            ...styles.text,
            paddingBottom: 20,
            fontFamily: 'Nunito-SemiBold',
          }}>
          Attempt {attempts} of 3
        </Text>
      )}
      {!guessed && attempts <= 3 ? (
        <>
          {textInput ? (
            <View style={styles.main}>
              <KeyboardInput
                guess={guess}
                setGuess={setGuess}
                submitGuess={submitGuess}
              />
            </View>
          ) : (
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
          )}
          <View style={styles.main}>
            <Button
              passedStyles={{ backgroundColor: 'mediumspringgreen' }}
              title="Enter"
              pressCallback={submitGuess}
            />
            {isRandom && (
              <Button title="Skip →" pressCallback={() => newGame(false)} />
            )}
            <Button
              title={textInput ? 'Use Drag and Drop' : 'Use Keyboard'}
              pressCallback={() => setTextInput(!textInput)}
            />
          </View>
        </>
      ) : (
        <View style={styles.main}>
          <Result
            reading={reading}
            isCorrect={reading === guess}
            isRandom={isRandom}
            newGame={newGame}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor: '#161f23',
  },
  kanji: {
    padding: 5,
    fontSize: 100,
    fontWeight: '400',
    textAlign: 'center',
    color: '#dadce1',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#dadce1',
    fontFamily: 'Nunito-Regular',
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
    opacity: 0.5,
  },
  backdrop2: {
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

export const shuffle = array => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default Game;
