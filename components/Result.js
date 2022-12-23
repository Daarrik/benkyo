import React from 'react';
import { BenkyoText } from '.';
import { styles } from '../constants';

const { header2, textBold, textCenter } = styles;

const Result = ({ isCorrect }) => {
  return (
    <BenkyoText style={[header2, textBold, textCenter]}>
      {isCorrect ? 'Correct!' : 'Incorrect'}
    </BenkyoText>
  );
};

export default Result;
