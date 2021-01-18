import { StyleSheet, StatusBar } from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    title_text: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
    },
    paragraph: {
        lineHeight: 20,
        marginVertical: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        // marginBottom: 10,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 12,
    }
})