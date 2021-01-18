import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import homeStack from '../routes/homeStack';

import HomeStack from './homeStack.js';
import AboutStack from './aboutStack.js';

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack
    }
})

export default createAppContainer(DrawerNavigator);
