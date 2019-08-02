import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Header(props) {
  return (
    <View style={styles.header}>
      <View style={styles.resultSection}>
        <Text style={[styles.colorResult, { color: props.colorText, }]}>
          {props.result}
        </Text>
        <View style={styles.medal}>
          <Ionicons name={props.iconResult} size={20} color={props.colorText} />
          <Ionicons name={props.iconResult} size={20} color={props.colorText} />
          <Ionicons name={props.iconResult} size={20} color={props.colorText} />
        </View>
      </View>
      <View style={styles.result}>
      <Text style={[styles.colorResult, { color: props.colorText, }]}>
        Trying: {props.totalTrying}
      </Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorResult: {
    fontWeight: 'bold', fontSize: 20, justifyContent: 'space-between'
  },
  resultSection:{
    flex: 0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  result:{
    flex: 0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  medal: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
