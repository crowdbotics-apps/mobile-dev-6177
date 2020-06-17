import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging5959Navigator from '../features/Messaging5959/navigator';
import CalendarView5958Navigator from '../features/CalendarView5958/navigator';
import EmailAuth5957Navigator from '../features/EmailAuth5957/navigator';
import Messaging5956Navigator from '../features/Messaging5956/navigator';
import CalendarView5955Navigator from '../features/CalendarView5955/navigator';
import Messaging5953Navigator from '../features/Messaging5953/navigator';
import EmailAuth5934Navigator from '../features/EmailAuth5934/navigator';
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
Messaging5959: { screen: Messaging5959Navigator },
CalendarView5958: { screen: CalendarView5958Navigator },
EmailAuth5957: { screen: EmailAuth5957Navigator },
Messaging5956: { screen: Messaging5956Navigator },
CalendarView5955: { screen: CalendarView5955Navigator },
Messaging5953: { screen: Messaging5953Navigator },
EmailAuth5934: { screen: EmailAuth5934Navigator },
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
