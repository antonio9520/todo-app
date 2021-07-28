import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../theme';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const Select = props => {
  return (
    <RNPickerSelect
      {...props}
      useNativeAndroidPickerStyle={false}
      style={props.error ? stylesError : styles}
      Icon={() => {
        return (
          <View style={styles.contIcon}>
            <Icon
              name="keyboard-arrow-down"
              size={20}
              color={theme.COLORS.gray}
            />
          </View>
        );
      }}
    />
  );
};

Select.propTypes = {
  error: PropTypes.bool,
  placeholder: PropTypes.object,
  onValueChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
};

export default Select;

const styles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: theme.COLORS.lightGray2,
    borderRadius: 10,
    height: 45,
    paddingLeft: 15,
    marginVertical: 7,
    color: theme.COLORS.black,
  },
  contIcon: {
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});
const stylesError = StyleSheet.create({
  inputAndroid: {
    backgroundColor: theme.COLORS.lightGray2,
    borderRadius: 10,
    height: 45,
    paddingLeft: 15,
    marginVertical: 7,
    color: theme.COLORS.black,
    borderWidth: 1,
    borderColor: theme.COLORS.red,
  },
});
