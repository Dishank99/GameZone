import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { Formik } from 'formik'
import { globalStyle } from '../styles/globalStyle.js'
import Button from '../shared/button.js'

import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),

    body: yup.string()
        .required()
        .min(8),

    rating: yup.string()
        .required()
        .test('rating-1-5', 'Rating must be be between 1 to 5', (value) => parseInt(value) > 0 && parseInt(value) <= 5)
    // test('<name of test>', '<erro message>', <function, that defiens the test condition, with a parameter 'value' given by yup>)
})

export default function ReviewForm({ onAdd }) {
    return (
        /**
         * Yup for Validation
         * Yup is used to define the Validation Schema which we pass to Formik's prop 'validationSchema'
         */

        /**
         * Formik Brief Doc (Format)
         * <Formik
         *  initialValues = { {<state of form>} }
         *  validationSchema = { <schema tha holds the validation rules, generaly constructed using 'yup'>, }
                | in case of errors, they are stored in props param which is passed in render function below |
         *  onSubmit={ <On Submit Handler func with 'values' as param, which is an object of values entered by user, 
         *  and 'actions' as param which containss various action related to form> (values, actions) => {} }
         * >
         * 
         * { <render function which returns a JSX with 'props or anything' as param which is properties of JSX > (props) => {
         *  <all the JSX>
         *  <props has predefined handler function provided by Formik like, 'handleChange('<name of value key>')', 'handleSubmit' >
         *  <props also has the values of state that is directly connected to 'initialValues' defiend above 'props.values.<any state value>>>
         * } }
         * 
         * <Formik/>
         */

        <Formik
            initialValues={{ title: '', body: '', rating: '' }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
                // console.log(values)
                actions.resetForm()
                onAdd(values)
            }}
        >
            {(props) => {
                return (
                    <View style={globalStyle.container}>
                        <TextInput
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            values={props.values.title}
                            style={globalStyle.input}
                            onBlur={props.handleBlur('title')}
                        //for showing real time error and not only when submit. errors are shown when textinput is blurred
                        />
                        <Text style={globalStyle.errorText}>{props.touched.title && props.errors.title}</Text>
                        {/* show error ig=f that particular box is touched */}

                        <TextInput
                            multiline
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            values={props.values.body}
                            style={globalStyle.input}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyle.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput
                            placeholder='Review Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            values={props.values.rating}
                            keyboardType='numeric'
                            style={globalStyle.input}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyle.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <Button
                            title='submit'
                            onClick={props.handleSubmit}
                            color='grey'
                        />
                    </View>
                )
            }}
        </Formik>
    )
}
