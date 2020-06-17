import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView5955Saga from '../features/CalendarView5955/redux/sagas';
import EmailAuth5954Saga from '../features/EmailAuth5954/redux/sagas';
import EmailAuth5934Saga from '../features/EmailAuth5934/redux/sagas';
import CalendarView5933Saga from '../features/CalendarView5933/redux/sagas';
import EmailAuth5931Saga from '../features/EmailAuth5931/redux/sagas';
import CalendarView5930Saga from '../features/CalendarView5930/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView5955Saga,
EmailAuth5954Saga,
EmailAuth5934Saga,
EmailAuth5931Saga,
CalendarView5930Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}