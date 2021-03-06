import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging5971Navigator from '../features/Messaging5971/navigator';
import CalendarView5970Navigator from '../features/CalendarView5970/navigator';
import EmailAuth5969Navigator from '../features/EmailAuth5969/navigator';
import BlankScreen15967Navigator from '../features/BlankScreen15967/navigator';
import BlankScreen15965Navigator from '../features/BlankScreen15965/navigator';
import CalendarView5961Navigator from '../features/CalendarView5961/navigator';
import EmailAuth5960Navigator from '../features/EmailAuth5960/navigator';
import Messaging5959Navigator from '../features/Messaging5959/navigator';
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
Messaging5971: { screen: Messaging5971Navigator },
CalendarView5970: { screen: CalendarView5970Navigator },
EmailAuth5969: { screen: EmailAuth5969Navigator },
BlankScreen15967: { screen: BlankScreen15967Navigator },
BlankScreen15965: { screen: BlankScreen15965Navigator },
CalendarView5961: { screen: CalendarView5961Navigator },
EmailAuth5960: { screen: EmailAuth5960Navigator },
Messaging5959: { screen: Messaging5959Navigator },
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
