import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../constants';

const { textInput, text, textBlack, textBold, textCenter } = styles;

const KeyboardInput = ({ guess, setGuess }) => {
  return (
    <TextInput
      style={[textInput, text, textBlack, textBold, textCenter]}
      onChangeText={setGuess}
      value={guess}
      placeholder="Guess here"
      maxLength={10}
    />
  );
};

export default KeyboardInput;
