import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from './Button';

const Result = ({ reading, isCorrect, isRandom, newGame }) => {
  const [readingRevealed, setReadingRevealed] = useState(isCorrect);

  return (
    <>
      <Text style={styles.result}>{isCorrect ? 'Correct!' : 'Incorrect'}</Text>
      <Button
        title={!readingRevealed ? 'Show Reading' : reading}
        pressCallback={() => setReadingRevealed(true)}
      />
      <Button
        title={isRandom ? 'Next' : 'Back'}
        pressCallback={() => newGame(false)}
      />
      {!isCorrect && !readingRevealed ? (
        <Button title="Retry" pressCallback={() => newGame(true)} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  result: {
    fontSize: 48,
    color: '#dadce1',
    textAlign: 'center',
  },
  main: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
});

export default Result;
