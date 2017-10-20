import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

export default class QuizView extends Component {
  handlePressAns = () => {
    alert('This is the answer!')
  }
  handlePressCorr = () => {
    this.props.navigation.navigate('NewCardView')
  }
  handlePressIncorr = () => {
    alert('Pika Pika')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>This is a question?</Text>
        <TouchableHighlight style={styles.btnAns} onPress={this.handlePressAns} underlayColor='white'>
          <Text style={styles.answer}>Answer</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={this.handlePressCorr} underlayColor='white'>
          <Text style={styles.btnTextCorr}>Correct</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn2} onPress={this.handlePressIncorr} underlayColor='white'>
          <Text style={styles.btnTextIncorr}>Incorrect</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5CC8BB',
    padding: 40,
  },
  question: {
    paddingTop: 40,
    fontSize: 30,
    height: 200,
  },
  answer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 30,
  },
  btnAns: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btn2: {
    backgroundColor: 'black',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnTextCorr: {
    color: 'black',
  },
  btnTextIncorr: {
    color: 'white',
  }
})
