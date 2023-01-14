import React, { useState } from 'react';
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
  GameStatus,
} from '../components';
import { words, kana, styles } from '../constants';

const { header, textBold, textCenter } = styles;

const Game = ({ navigation, route: { params } }) => {
  const { isRandom, selectedEntry } = params;

  const [kanjiEntry, setKanjiEntry] = useState(() => {
    if (isRandom) {
      return getRandomKanjiEntry();
    } else {
      return {
        kanji: selectedEntry.kanji,
        reading: selectedEntry.reading,
        kanaBoxes: generateKanaBoxes(selectedEntry.reading),
      };
    }
  });
  const { kanji, reading, kanaBoxes } = kanjiEntry;

  const [testedWords, setTestedWords] = useState([]);
  const [textInput, setTextInput] = useState(true);
  const [guess, setGuess] = useState('');
  const [guessed, setGuessed] = useState(false);

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

  const nextWord = () => {
    if (!isRandom) navigation.goBack();
    if (testedWords.length === 9)
      navigation.reset({
        index: 1,
        routes: [
          { name: 'Home' },
          { name: 'Results', params: { testedWords: testedWords } },
        ],
      });

    setTestedWords(previousTestedWords =>
      previousTestedWords.concat({
        kanji: kanji,
        reading: reading,
        correct: reading === guess,
      }),
    );

    setGuess('');
    setGuessed(false);
    setKanjiEntry(getRandomKanjiEntry);
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
      <HeaderBox style={{ flex: 4 }}>
        {isRandom && <GameStatus fillAmount={testedWords.length} />}
        <BenkyoText style={[textBold, textCenter]}>
          What is the reading of this word?
        </BenkyoText>
        <BenkyoText style={[header, textBold, textCenter]}>{kanji}</BenkyoText>
      </HeaderBox>
      <View style={{ flex: 5 }}>
        {!guessed ? displayInput() : <Result isCorrect={reading === guess} />}
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <BenkyoButton
          style={{ backgroundColor: 'darkgreen' }}
          title={!guessed ? 'Check' : 'Continue'}
          onPress={!guessed ? submitGuess : nextWord}
        />
      </View>
    </Container>
  );
};

export default Game;

function shuffle(array) {
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
}

function getRandomKanjiEntry() {
  const kanjiEntry = words[Math.floor(Math.random() * words.length)];
  kanjiEntry.kanaBoxes = generateKanaBoxes(kanjiEntry.reading);
  return kanjiEntry;
}

function generateKanaBoxes(reading) {
  if (reading.length >= 7) return shuffle(reading.split(''));

  wrongAnswers = [];
  for (let i = 0; i < 7 - reading.length; i++)
    wrongAnswers.push(kana.charAt(Math.random() * kana.length));

  const answers = shuffle(reading.split('').concat(wrongAnswers));
  return answers;
}
