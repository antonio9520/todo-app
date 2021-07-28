import {
  ADD_TASK,
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  START_TOOGLE_TASK,
  TOOGLE_TASK_ERROR,
  TOOGLE_TASK_SUCCESS,
} from '../types';

const initialState = {
  tasks: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
    case GET_TASKS:
    case START_TOOGLE_TASK:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        tasks: [action.payload, ...state.tasks],
      };
    case ADD_TASK_ERROR:
    case GET_TASKS_ERROR:
    case TOOGLE_TASK_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        tasks: action.payload,
      };
    case TOOGLE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? {...task, isComplete: action.payload.value}
            : task,
        ),
      };
    default:
      return state;
  }
}
