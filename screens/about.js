import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { globalStyle } from '../styles/globalStyle.js'

export default function About() {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title_text}>About Screen</Text>
        </View>
    )
}
