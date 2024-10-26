import { delay, call, put, takeEvery } from 'redux-saga/effects';
import { incrementByAmount, incrementAsync } from './counterSlice';

function* handleIncrementAsync(action: ReturnType<typeof incrementAsync>){
  yield delay(1000); // wait for 1 second
  yield put(incrementByAmount(action.payload)); // dispatch increment 

}
export function* counterSaga() {
  yield takeEvery(incrementAsync.type, handleIncrementAsync );

}