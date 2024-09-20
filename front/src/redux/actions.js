// src/actions/stopwatchActions.js
import {SAVE_RECORD,STOP_STOPWATCH,RESET_STOPWATCH,START_STOPWATCH} from "./actions-types"

export const startStopwatch = () => ({ type: START_STOPWATCH });
export const stopStopwatch = () => ({ type: STOP_STOPWATCH });
export const resetStopwatch = () => ({ type: RESET_STOPWATCH });

export const saveRecord = (time) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/record', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ time })
  });
  const data = await response.json();
  dispatch({ type: SAVE_RECORD, payload: data });
};
