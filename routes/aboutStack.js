import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import About from '../screens/about.js';

import { StatusBar } from 'react-native';

import Header from '../shared/header.js';

import React from 'react';

const stackNavigator = createStackNavigator({
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='About GameZone' />
            }
        }
    }
}, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: StatusBar.currentHeight + 60 },
    }
})

export default createAppContainer(stackNavigator);