/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
import { take, select } from 'redux-saga/effects';

/**
 * Log all redux actions saga
 */
export default function* logActionsSaga() {
    console.log("Log Actions");
//   if (process.env.ENABLE_LOGGING === 'true') {
    while (true) {
      const action = yield take();
      
      console.group(action.type);
      console.info('dispatching', action);

      const nextState = yield select();
      console.log('next state....', nextState);
      console.groupEnd(action.type);
    }
//   }
}
