import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Submit = ({ submitGuess }) => {
  return (
    <TouchableOpacity style={styles.submit} onPress={submitGuess}>
      <Text style={{ fontSize: 18, color: '#001220', textAlign: 'center' }}>
        Submit
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submit: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 10,
    width: '30%',
    height: 35,
    backgroundColor: '#dadce1',
    fontSize: 18,
  },
});

export default Submit;
