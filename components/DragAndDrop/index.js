import React, { useRef } from 'react';
import { View } from 'react-native';
import DuoDragDrop from '@jamsch/react-native-duo-drag-drop';

const renderPlaceholder = ({ style }) => {
  return (
    <View
      style={{
        ...style,
        borderRadius: 5,
        backgroundColor: 'white',
        opacity: 0.1,
      }}
    />
  );
};

const DragAndDrop = ({ kanaBoxes, setGuess }) => {
  const ref = useRef(null);

  return (
    <DuoDragDrop
      ref={ref}
      words={kanaBoxes}
      onDrop={() => setGuess(ref.current.getAnsweredWords().join(''))}
      wordHeight={42}
      renderPlaceholder={renderPlaceholder}
    />
  );
};

export default DragAndDrop;
