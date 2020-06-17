import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth5954Navigator from '../features/EmailAuth5954/navigator';
import Messaging5953Navigator from '../features/Messaging5953/navigator';
import Messaging5935Navigator from '../features/Messaging5935/navigator';
import EmailAuth5934Navigator from '../features/EmailAuth5934/navigator';
import CalendarView5933Navigator from '../features/CalendarView5933/navigator';
import Messaging5932Navigator from '../features/Messaging5932/navigator';
import EmailAuth5931Navigator from '../features/EmailAuth5931/navigator';
import CalendarView5930Navigator from '../features/CalendarView5930/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth5954: { screen: EmailAuth5954Navigator },
Messaging5953: { screen: Messaging5953Navigator },
Messaging5935: { screen: Messaging5935Navigator },
EmailAuth5934: { screen: EmailAuth5934Navigator },
CalendarView5933: { screen: CalendarView5933Navigator },
Messaging5932: { screen: Messaging5932Navigator },
EmailAuth5931: { screen: EmailAuth5931Navigator },
CalendarView5930: { screen: CalendarView5930Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
