import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { roundNumber } from './Utils'


export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  conditionalRender() {
    if (this.props.result == "")
      result = "Let's play"
    else
      result = this.props.result

    if (this.props.result == "")
      medal = <Text></Text>
    else
      medal =
        <View style={styles.medal}>
          <Ionicons name={this.props.iconResult} size={20} color={this.props.colorText} />
          <Ionicons name={this.props.iconResult} size={20} color={this.props.colorText} />
          <Ionicons name={this.props.iconResult} size={20} color={this.props.colorText} />
        </View>

    if (this.props.totalTrying == "")
      winResult = 0, defeatResult = 0, tieResult = 0
    else {
      winResult = roundNumber((this.props.winResult / this.props.totalTrying) * 100) 
      defeatResult = roundNumber((this.props.defeatResult / this.props.totalTrying) * 100)
      tieResult = roundNumber((this.props.tieResult / this.props.totalTrying) * 100)
    }

    return [result, medal, winResult, defeatResult, tieResult]
  }

  render() {
    let [result, medal, winResult, defeatResult, tieResult] = this.conditionalRender()

    return (
      <View style={styles.header}>
        <View style={styles.resultSection}>
          <Text style={[styles.colorResult, { color: this.props.colorText, }]}>
            {result}
          </Text>
          {medal}
        </View>
        <View style={styles.result}>
          <Text style={[styles.colorResult, { color: this.props.colorText, }]}>
             {this.props.totalTrying} games
          </Text>
          <View style={styles.percentage}>
            <Text>
              W:{this.props.winResult}
              L:{this.props.defeatResult}
              T:{this.props.tieResult}
            </Text>
          </View>
          <View style={styles.percentage}>
            <Text>
              W:{winResult}%
              L:{defeatResult}%
             T:{tieResult}%
          </Text>

          </View>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorResult: {
    width: 100,
    flexDirection: 'column', fontWeight: 'bold', fontSize: 20
  },
  resultSection: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  medal: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percentage: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
