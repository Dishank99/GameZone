import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default function Button({ title, onClick, color }) {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.button__text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#333',
        borderRadius: 10,
    },
    button__text: {
        fontSize: 20,
        color: 'white',
        textTransform: 'capitalize',
    }
})
