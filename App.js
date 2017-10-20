
import React, { Component } from 'react'
import { View } from 'react-native'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import NewDeckView from './components/NewDeckView'
import NewCardView from './components/NewCardView'
import QuizView from './components/QuizView'
import AnswerView from './components/AnswerView'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

const DeckListStack = StackNavigator({
  DeckListView: {screen: DeckListView},
  DeckView: {screen: DeckView},
  NewCardView: {screen: NewCardView},
  QuizView: {screen: QuizView},
  AnswerView: {screen: AnswerView},
})

const Tabs = TabNavigator({
  Decks: {screen: DeckListStack},
  NewDeckView: {screen: NewDeckView},
})

export default class App extends Component {
  render() {
    return (
        <Tabs/>
    )
  }
}
