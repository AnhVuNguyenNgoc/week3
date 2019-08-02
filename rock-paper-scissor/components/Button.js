import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPressButton={() => props.onPressButton(props.name)}
      >
  <Text style={styles.buttonText}>{props.name}</Text>
      </TouchableOpacity >
     );
   }

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200, margin: 10, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#640D14',
  }
  ,
  buttonText: {
    fontSize: 25, color: 'white', fontWeight: 'bold',
  }

});
