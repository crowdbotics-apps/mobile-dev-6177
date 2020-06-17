import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5960Reducer from '../features/EmailAuth5960/redux/reducers';
import CalendarView5958Reducer from '../features/CalendarView5958/redux/reducers';
import EmailAuth5957Reducer from '../features/EmailAuth5957/redux/reducers';
import CalendarView5955Reducer from '../features/CalendarView5955/redux/reducers';
import EmailAuth5934Reducer from '../features/EmailAuth5934/redux/reducers';
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
EmailAuth5960: EmailAuth5960Reducer,
CalendarView5958: CalendarView5958Reducer,
EmailAuth5957: EmailAuth5957Reducer,
CalendarView5955: CalendarView5955Reducer,
EmailAuth5934: EmailAuth5934Reducer,
EmailAuth5931: EmailAuth5931Reducer,
CalendarView5930: CalendarView5930Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});