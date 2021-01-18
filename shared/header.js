import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(props) {
    // this header is going to be a PATCH to the default header provided by stacknavigator
    return (
        // ImageBackground is for wrapping all of its children in to the backgroung image mentioned
        <View style={{
            backgroundColor: '#eee', height: StatusBar.currentHeight + 60,
            elevation: 3, shadowOffset: { width: 1, height: 1 },
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowRadius: 2,
        }} >
            <ImageBackground source={require('../assets/game_bg.png')} style={styles.header} >
                <MaterialIcons name='menu' size={28} style={styles.icon} onPress={() => props.navigation.openDrawer()} />
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Image style={styles.header__logo} source={require('../assets/heart_logo.png')} />
                    <Text style={styles.header__title} >{props.title}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: StatusBar.currentHeight + 35,
        marginTop: 25,
        elevation: 3,
        shadowColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#eee',
    },
    header__title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    header__logo: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
    icon: {
        position: 'absolute',
        left: 15,
    },
})