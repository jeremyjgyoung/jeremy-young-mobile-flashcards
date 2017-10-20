import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, TextInput } from 'react-native'

export default class NewDeckView extends Component {
  state = {
    input: 'Enter Deck Name'
  }
  handlePress = () => {
    alert('You submitted a new deck')
  }
  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }
  render() {
    const { input } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          value={input}
          style={styles.input}
          onChange={this.handleTextChange}
        />
        <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='white'>
          <Text style={styles.btnText}>Submit</Text>
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
  title: {
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 30,
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 44,
    padding: 8,
    margin: 50,
  },
  btn: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'black',
  },
})
