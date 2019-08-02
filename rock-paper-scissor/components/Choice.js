import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Choice(props) {
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>
      {props.user}
    </Text>
      <Image
        source={{ uri: props.uri }}
        resizeMode="contain"
        style={styles.choiceImage}
      />
      <Text style={styles.choiceCardTitle}>
        {props.name}
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({

  choiceContainer: {
    flex: 1, alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25, color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30, color: '#250902'
  },
  choiceImage: {
    width: 150, height: 150, padding: 10,
  }

}
);
