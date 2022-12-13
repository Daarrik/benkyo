import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const KeyboardInput = ({ guess, setGuess, submitGuess }) => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={setGuess}
      onSubmitEditing={submitGuess}
      value={guess}
      placeholder="Guess here"
      maxLength={10}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    height: 80,
    borderRadius: 10,
    backgroundColor: '#dadce1',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default KeyboardInput;
