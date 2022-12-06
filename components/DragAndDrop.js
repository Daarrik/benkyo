import React, { useRef } from 'react';
import { View, Button, ScrollView } from 'react-native';
import DuoDragDrop from '@jamsch/react-native-duo-drag-drop';

const DragAndDrop = ({ reading }) => {
  const ref = useRef(null);

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <DuoDragDrop ref={ref} words={reading.split('')} />
    </View>
  );
};

export default DragAndDrop;
