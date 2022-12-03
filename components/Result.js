import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const Result = ({ isCorrect, isRandom, newGame }) => {
  return (
    <>
      <Text style={styles.result}>{isCorrect ? 'Correct!' : 'Incorrect'}</Text>
      <View style={styles.main}>
        {!isCorrect ? (
          <Button title="Retry" pressCallback={() => newGame(true)} />
        ) : null}
        <Button
          title={isRandom ? 'Next' : 'Back'}
          pressCallback={() => newGame(false)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  result: {
    fontSize: 32,
    color: '#dadce1',
    textAlign: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
});

export default Result;
