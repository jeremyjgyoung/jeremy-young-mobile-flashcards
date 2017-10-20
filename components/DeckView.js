import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

function Deck ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spanish</Text>
      <Text style={styles.number}>1 cards</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TestAdd')} underlayColor='white'>
        <Text style={styles.btnText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.btn2} onPress={() => navigation.navigate('TestQuiz')} underlayColor='white'>
        <Text style={styles.btnText2}>Start Quiz</Text>
      </TouchableHighlight>
    </View>
  )
}

function TestAdd () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Card</Text>
    </View>
  )
}

function TestQuiz () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Quiz</Text>
    </View>
  )
}

const DeckStack = StackNavigator({
  Deck: {
    screen: Deck,
  },
  TestAdd: {
    screen: TestAdd,
  },
  TestQuiz: {
    screen: TestQuiz,
  },
})

export default class DeckView extends Component {
  render() {
    return (
      <DeckStack />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5CC8BB',
    padding: 40,
  },
  title: {
    padding: 50,
    fontSize: 30,
    height: 30,
  },
  number: {
    padding: 50,
    fontSize: 18,
    height: 20,
    color: 'white',
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
  btnText: {
    color: 'black',
  },
  btnText2: {
    color: 'white',
  }
})
