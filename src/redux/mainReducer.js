import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5934Reducer from '../features/EmailAuth5934/redux/reducers';
import CalendarView5933Reducer from '../features/CalendarView5933/redux/reducers';
import EmailAuth5931Reducer from '../features/EmailAuth5931/redux/reducers';
import CalendarView5930Reducer from '../features/CalendarView5930/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth5934: EmailAuth5934Reducer,
CalendarView5933: CalendarView5933Reducer,
EmailAuth5931: EmailAuth5931Reducer,
CalendarView5930: CalendarView5930Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});