import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { globalStyle } from '../styles/globalStyle.js'
import ReviewDetails from './reviewDetails.js';

import Card from '../shared/card.js'

import { MaterialIcons } from '@expo/vector-icons';

import ReviewForm from './reviewForm.js'

export default function Home(props) {

    const [modelStatus, setModalStatus] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'lorem ipsum1', body: 'some body1', rating: 1, key: '1' },
        { title: 'lorem ipsum2', body: 'some body2', rating: 2, key: '2' },
        { title: 'lorem ipsum3', body: 'some body3', rating: 3, key: '3' },
    ]);

    const addNewReview = (newReview) => {
        setReviews(currentState => [...currentState, { ...newReview, key: Date.now().toString() }])
        setModalStatus(false)
    }

    return (
        <View style={globalStyle.container}>

            {/* The Modal component is a basic way to present content above an enclosing view.*/}
            <Modal visible={modelStatus} animationType='fade'>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{ flex: 1, }}>
                        <MaterialIcons
                            name='close' size={45}
                            onPress={() => setModalStatus(false)}
                            style={[styles.modal__toggle, { marginTop: 15, padding: 7.5, paddingLeft: 10 }]}
                        />
                        <ReviewForm onAdd={addNewReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={50}
                onPress={() => { console.log('pressed'); setModalStatus(true) }}
                style={styles.modal__toggle}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ReviewDetails', item)}>
                        {/* inorder to send date to the other screen in navigation. pass another argument with screen name i.e an object of data */}
                        <Card>
                            <Text style={[globalStyle.title_text
                                // , { backgroundColor: '#ddd', marginVertical: 5, padding: 5 }
                            ]}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modal__toggle: {
        // alignSelf: 'center',
        // borderWidth: 1,
        // borderColor: 'lightgrey',
        // padding: 5,
        // paddingLeft: 7,
        // borderRadius: 10,
        // marginBottom: 15,
        // color: 'black',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 30,
        right: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 5,
        paddingLeft: 7,
        borderRadius: 50,
        color: 'white',
        backgroundColor: 'rgb(230, 0, 0)',
        elevation: 3,
        zIndex: 2,
    }
})
