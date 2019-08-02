import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import ChoiceButton from './components/ChoiceButton';
import Choice from "./components/Choice";
import { CHOICES, getRoundOutcome, determineStatusResult, determineStatusDetailResult } from './components/Utils'

export default class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { name: "", uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png", nameCom: "rock", uriCom: "http://pngimg.com/uploads/stone/stone_PNG13622.png", result: "", colorResult: "red", iconResult: "ios-medal", totalTrying: 0, winResult: 0, defeatResult: 0, tieResult: 0 };

    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton(_choice) {
    //get choices from player, computer 
    let playerChoice = _choice
    playerChoice = CHOICES.find(choice => choice.name === playerChoice)

    // result [result, computerChoice]
    let _result = getRoundOutcome(playerChoice.name)
    let [result, computerChoice] = _result
    computerChoice = CHOICES.find(choice => choice.name === computerChoice)
    let statusResult = determineStatusResult(result)
    let [colorResult, iconResult] = statusResult

    let { beforeWinResult, beforeDefeatResult, beforeTieResult } = this.state
    let detailResult = determineStatusDetailResult(result, [beforeWinResult, beforeDefeatResult, beforeTieResult])
    let [winResult, defeatResult, tieResult] = detailResult

    console.log(winResult)
    //setState()
    let { name, uri } = playerChoice
    let nameCom = computerChoice.name
    let uriCom = computerChoice.uri
    let totalTrying = this.state.totalTrying; totalTrying++

    this.setState({
      name, uri, nameCom, uriCom, result, colorResult, iconResult, totalTrying, winResult, defeatResult, tieResult
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header result={this.state.result} colorText={this.state.colorResult} iconResult={this.state.iconResult} totalTrying={this.state.totalTrying} winResult={this.state.winResult} defeatResult={this.state.defeatResult} tieResult={this.state.tieResult} />
        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
            <Choice user="Player" name={this.state.name} uri={this.state.uri} />
            <Text >vs</Text>
            <Choice user="Com" name={this.state.nameCom} uri={this.state.uriCom} />
          </View>
        </View>
        <View style={styles.choices}>
          <ChoiceButton name="rock" onPress={this.onPressButton} />
          <ChoiceButton name="scissors" onPress={this.onPressButton} />
          <ChoiceButton name="paper" onPress={this.onPressButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  playArea: {
    flex: 0.5,
  },
  choices: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    flex: 0.5,
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      height: 5, width: 5
    }
    ,
  }
  , choiceContainer: {
    flex: 1, alignItems: 'center',
  }
  , choiceDescription: {
    fontSize: 25, color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
  , choiceCardTitle: {
    fontSize: 30, color: '#250902'
  }
  , choiceImage: {
    width: 150, height: 150, padding: 10,
  }
}

);

