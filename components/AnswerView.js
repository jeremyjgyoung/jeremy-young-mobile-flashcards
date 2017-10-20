import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

export default class AnswerView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.answer}>This is the answer!</Text>
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
  answer: {
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
