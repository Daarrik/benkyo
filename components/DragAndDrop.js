import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DuoDragDrop from '@jamsch/react-native-duo-drag-drop';

const DragAndDrop = ({ reading }) => {
  const ref = useRef(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ margin: 20 }}>
        <DuoDragDrop
          ref={ref}
          words={['test', 'testtest', 'te', 't']}
          // gesturesDisabled={false}
        />
      </View>
      <Button
        title="get words"
        onPress={() => {
          console.log(ref.current.getWords());
        }}
      />
    </GestureHandlerRootView>
  );
};

export default DragAndDrop;
