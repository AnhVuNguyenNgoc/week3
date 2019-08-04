import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
export default function ChoiceButton(props) {

    return (

        <TouchableOpacity style={styles.buttonStyle}
            onPress={
                () => props.onPress(props.name)} >

            <Text style={styles.buttonText} > {props.name} < /Text>
    
        </TouchableOpacity >

            );
        }
const styles = StyleSheet.create({
                choices: {
                flex: 0.5,
        },
    buttonStyle: {
                width: 200,
            margin: 10,
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#640D14',
        },
    buttonText: {
                fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
        }
    
});