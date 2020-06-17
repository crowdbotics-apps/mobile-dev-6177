import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5969Reducer from '../features/EmailAuth5969/redux/reducers';
import CalendarView5961Reducer from '../features/CalendarView5961/redux/reducers';
import EmailAuth5960Reducer from '../features/EmailAuth5960/redux/reducers';
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
EmailAuth5969: EmailAuth5969Reducer,
CalendarView5961: CalendarView5961Reducer,
EmailAuth5960: EmailAuth5960Reducer,
CalendarView5955: CalendarView5955Reducer,
EmailAuth5934: EmailAuth5934Reducer,
EmailAuth5931: EmailAuth5931Reducer,
CalendarView5930: CalendarView5930Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});