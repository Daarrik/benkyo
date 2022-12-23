import React, { useState, useEffect, useCallback } from 'react';
import { ToastAndroid, View } from 'react-native';
import {
  Container,
  HeaderBox,
  BenkyoText,
  BenkyoButton,
  KeyboardInput,
  Result,
  Backdrop,
  DragAndDrop,
} from '../components';
import { words, kana, styles } from '../constants';

const { header, textBold, textCenter } = styles;

const Game = ({ navigation, route: { params } }) => {
  const { isRandom, selectedEntry } = params;

  const [kanjiEntry, setKanjiEntry] = useState(() => {
    if (isRandom) {
      return words[Math.floor(Math.random() * words.length)];
    } else {
      return {
        kanji: selectedEntry['kanji'],
        reading: selectedEntry['reading'],
      };
    }
  });
  const { kanji, reading } = kanjiEntry;

  const [textInput, setTextInput] = useState(false);
  const [guess, setGuess] = useState('');
  const [guessed, setGuessed] = useState(false);

  const generateKanaBoxes = useCallback(() => {
    if (reading.length >= 7) return shuffle(reading.split(''));

    wrongAnswers = [];
    for (let i = 0; i < 7 - reading.length; i++)
      wrongAnswers.push(kana.charAt(Math.random() * kana.length));

    const answers = shuffle(reading.split('').concat(wrongAnswers));
    return answers;
  });
  const [kanaBoxes, setKanaBoxes] = useState(() => generateKanaBoxes());

  // Could potentially get rid of this by including answers as non-stateful
  useEffect(() => {
    setKanaBoxes(generateKanaBoxes());
  }, [kanjiEntry]);

  const submitGuess = () => {
    if (guess === '') {
      ToastAndroid.showWithGravity(
        'Please input a guess.',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return;
    }

    setGuessed(true);
  };

  const newGame = () => {
    if (!isRandom) navigation.goBack();

    setGuess('');
    setGuessed(false);

    const newEntry = words[Math.floor(Math.random() * words.length)];
    setKanjiEntry(newEntry);
  };

  const displayInput = () => {
    if (textInput) {
      return <KeyboardInput guess={guess} setGuess={setGuess} />;
    } else {
      return <DragAndDrop kanaBoxes={kanaBoxes} setGuess={setGuess} />;
    }
  };

  return (
    <Container>
      <Backdrop word={kanji} />
      <HeaderBox>
        <BenkyoText style={[textBold, textCenter]}>
          What is the reading of this word?
        </BenkyoText>
        <BenkyoText style={[header, textBold, textCenter]}>{kanji}</BenkyoText>
      </HeaderBox>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {!guessed ? displayInput() : <Result isCorrect={reading === guess} />}
        <BenkyoButton
          style={{ backgroundColor: 'darkgreen' }}
          title="Continue"
          onPress={!guessed ? submitGuess : newGame}
        />
      </View>
    </Container>
  );
};

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
