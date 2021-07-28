import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableHighlight, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Tasks, CreateTask} from '../views';
import theme from '../theme';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tasks"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        animation="fade">
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{
            title: 'To-Do App',
            headerStyle: {
              borderBottomColor: theme.COLORS.lightGray,
              borderBottomWidth: 1,
            },
            headerRight: () => (
              <View style={styles.conteinerBtns}>
                <TouchableHighlight>
                  <Icon name="search" size={18} color={theme.COLORS.black} />
                </TouchableHighlight>
                <TouchableHighlight>
                  <IconMI
                    name="notifications-none"
                    size={22}
                    color={theme.COLORS.black}
                  />
                </TouchableHighlight>
                <TouchableHighlight>
                  <IconMI name="menu" size={22} color={theme.COLORS.black} />
                </TouchableHighlight>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="addTask"
          component={CreateTask}
          options={() => ({
            title: 'Add Task',
            headerStyle: {
              borderBottomColor: theme.COLORS.lightGray,
              borderBottomWidth: 1,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  conteinerBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    marginRight: 15,
    justifyContent: 'space-between',
  },
});
