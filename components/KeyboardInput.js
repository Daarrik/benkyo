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
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 5,
    width: '50%',
    backgroundColor: '#dadce1',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default KeyboardInput;
