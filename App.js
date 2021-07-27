import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainNavigator from './routes/MainNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MainNavigator />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
