import { createStackNavigator } from 'react-navigation-stack';
//for stack navgation

import { createAppContainer } from 'react-navigation';
//stack navigator is wrapped in AppContainer

import Home from '../screens/home.js';
import ReviewDetails from '../screens/reviewDetails.js';
import Header from '../shared/header.js';

import { StatusBar } from 'react-native';

import React from 'react';

const Screens = {
    /**
     * <name of screen>: {
     *  screen: <screen componenet that you want to show>
     *  navigationOptions: {
     *      title: '<title of header>'
     *      headerStyle: {<styles>}
     *      headerTintColor: '<color>' //color of text in header
     *  }
     * }
     */
    // for common navigation Options in differenct scrent you can wrap them instead, in second object argumnet in createStackNavigator
    //When we congigure screens for navigation, every scrren gets a navigation proerty in its props
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='GameZone' />
            }
        },
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        },
    },
}

const HomeStack = createStackNavigator(Screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: StatusBar.currentHeight + 60 },
    },
}); //in createStackNavigator we mention th screens for navigations. It takes an JS Object

export default createAppContainer(HomeStack);
// this reaturns a compoennet thaat we can use in App.js for the navgation stuff