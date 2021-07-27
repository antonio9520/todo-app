import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
          }}
        />
        <Stack.Screen
          name="addTask"
          component={CreateTask}
          options={({navigation, route}) => ({
            title: 'Add Task',
            // headerLeft: props => (
            //   <Button title="" {...props} onPress={() => navigation.goBack()} />
            // ),
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
