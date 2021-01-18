import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import { globalStyle } from '../styles/globalStyle.js'

import Card from '../shared/card.js'
import { ratingImageUrls } from '../shared/constants.js'

export default function ReviewDetails(props) {
    const rating = props.navigation.getParam('rating');
    return (
        <View style={globalStyle.container}>
            {/* the data passed by the othr screen is an object and to get dataObject's properties use getParam('<prop name>') of navigation */}
            <Card>
                <Text style={globalStyle.title_text}>{props.navigation.getParam('title')}</Text>
                <Text style={globalStyle.title_text}>{props.navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text style={globalStyle.title_text}>GameZone rating: </Text>
                    <Image source={ratingImageUrls[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
})
