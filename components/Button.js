import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, pressCallback, passedStyles }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...passedStyles }}
      onPress={pressCallback}>
      <Text style={{ fontSize: 18, color: '#001220', textAlign: 'center' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    width: '30%',
    height: 35,
    backgroundColor: '#dadce1',
  },
});

export default Button;
