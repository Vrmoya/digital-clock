// src/reducers/stopwatchReducer.js
import { START_STOPWATCH, STOP_STOPWATCH, RESET_STOPWATCH, SAVE_RECORD } from '../redux/actions-types';

const initialState = {
  time: 0,
  isRunning: false,
  records: []
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_STOPWATCH:
      return { ...state, isRunning: true };
    case STOP_STOPWATCH:
      return { ...state, isRunning: false };
    case RESET_STOPWATCH:
      return { ...state, time: 0, isRunning: false };
    case SAVE_RECORD:
      return { ...state, records: [...state.records, action.payload] };
    default:
      return state;
  }
};

export default stopwatchReducer;
