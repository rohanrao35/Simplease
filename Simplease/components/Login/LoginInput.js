import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


export default class LoginInput extends Component {


  render() {

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          />

        <TextInput
          placeholder="Password"
          style={styles.input}
          />

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  input: {
    height: 40,
    backgroundColor: 'red',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,

  }
});
