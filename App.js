
import React, { Component } from 'react'
import { View } from 'react-native'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import NewDeckView from './components/NewDeckView'
import NewCardView from './components/NewCardView'
import QuizView from './components/QuizView'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

const Stack = StackNavigator({
  DeckListView: {
    screen: DeckListView
  },
  DeckView: {
    screen: DeckView
  },
})

const Tabs = TabNavigator({
  Decks: {
    screen: Stack
  },
  NewDeckView: {
    screen: NewDeckView
  },
})

export default class App extends Component {
  render() {
    return (
        <Tabs/>
        //<QuizView/>
    )
  }
}
