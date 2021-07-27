import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import theme from '../theme';

const CustomInput = props => {
  return <TextInput style={styles.input} {...props} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.COLORS.lightGray2,
    borderRadius: 10,
    paddingLeft: 15,
  },
});
