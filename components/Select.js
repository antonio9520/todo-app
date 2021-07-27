import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../theme';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Select = props => {
  return (
    <RNPickerSelect
      {...props}
      useNativeAndroidPickerStyle={false}
      style={styles}
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

export default Select;

const styles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: theme.COLORS.lightGray2,
    borderRadius: 10,
    height: 45,
    paddingLeft: 15,
    marginVertical: 7,
    color: theme.COLORS.secondary,
  },
  // placeholder: {color: theme.COLORS.secondary},
  contIcon: {
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  iconView: {
    borderStyle: 'solid',
    borderTopColor: theme.COLORS.gray,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderRadius: 10,
  },
});
