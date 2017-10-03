import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/Login/Login'
import CreateAccount from './components/CreateAccount/CreateAccount'



export default class App extends React.Component {
  render() {
    return (

      <View>
        <CreateAccount />

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
