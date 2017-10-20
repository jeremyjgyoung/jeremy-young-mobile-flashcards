import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'

export default class DeckListView extends Component {
  handlePress = () => {
    this.props.navigation.navigate('DeckView')
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {title: 'Is this working?', number: 5},
            {title: 'Spanish', number: 1},
            {title: 'Countries', number: 5},
            {title: 'French', number: 3},
            {title: 'Anatomy', number: 5},
            {title: 'Italian', number: 8},
            {title: 'Important People', number: 5},
            {title: 'Media', number: 0},
            {title: 'Japanese', number: 5},
            {title: 'Chinese', number: 5},
          ]}
          renderItem={({item}) => (
            <TouchableHighlight onPress={this.handlePress} >
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.number}>{item.number} cards</Text>
              </View>
              {/* Write logic to properly pluralize cards item.number==1 no s */}
              {/* Add keys for each item */}
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#5CC8BB',
    borderBottomWidth: 10,
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
})
