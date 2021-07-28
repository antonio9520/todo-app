import {
  ADD_TASK,
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  START_TOOGLE_TASK,
  TOOGLE_TASK_SUCCESS,
  TOOGLE_TASK_ERROR,
} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function addTaskAction(task) {
  return async dispatch => {
    dispatch(addTask);
    try {
      let tasks;
      const response = JSON.parse(await AsyncStorage.getItem('@tasks')) || [];

      if (response.length > 0) {
        tasks = [task, ...response];
      } else {
        tasks = [task];
      }

      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      dispatch(addTaskSuccess(task));
      return true;
    } catch (error) {
      console.log(error);
      dispatch(addTaskError());
    }
  };
}

const addTask = () => ({type: ADD_TASK});

const addTaskSuccess = data => ({
  type: ADD_TASK_SUCCESS,
  payload: data,
});

const addTaskError = () => ({
  type: ADD_TASK_ERROR,
});

export function getTasksAction() {
  return async dispatch => {
    dispatch(getTasks());
    try {
      const response = JSON.parse(await AsyncStorage.getItem('@tasks')) || [];

      dispatch(getTasksSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(getTasksError());
    }
  };
}

const getTasks = () => ({
  type: GET_TASKS,
});

const getTasksSuccess = tasks => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks,
});

const getTasksError = () => ({
  type: GET_TASKS_ERROR,
});

export function toogleTaskAction(id, value) {
  return async dispatch => {
    dispatch(startToogleTask());
    try {
      const response = JSON.parse(await AsyncStorage.getItem('@tasks'));
      const tasks = response.map(task =>
        task.id === id ? {...task, isComplete: value} : task,
      );
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      dispatch(toogleTaskSuccess({id, value}));
    } catch (error) {
      console.log(error);
      dispatch(toogleTaskError());
    }
  };
}

const startToogleTask = () => ({
  type: START_TOOGLE_TASK,
});

const toogleTaskSuccess = data => ({
  type: TOOGLE_TASK_SUCCESS,
  payload: data,
});

const toogleTaskError = () => ({
  type: TOOGLE_TASK_ERROR,
});
