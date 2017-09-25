import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, KeyboardAvoidingView } from 'react-native';


//import LoginInput from './LoginInput.js'
//<View style={{width: 375, height: 670, backgroundColor: 'skyblue'}} />
export default class Login extends Component {

  render(){

    return (

      <View style={styles.container}>
          <Text style={{alignItems: 'center'}}

              style={{fontSize: 40}}>
              Simplease
          </Text>
          <TextInput
            placeholder='Username'

            style={styles.input}
          />
          <TextInput
            placeholder='Password'

            style={styles.input}
          />
          <View style={{margin:50}} />
          <Button style={styles.button}
                  //onPress={this.props.onLoginPress}
                  title="Login"
              />
          </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    paddingHorizontal: 0,
    backgroundColor: '#3498db',
    width: 375,
    height:667
  },
input: {
  height: 40,
  //backgroundColor: '#95a5a6',
  marginBottom: 20,
  paddingHorizontal: 10,
  paddingVertical: 20,

},
button: {
  marginBottom: 250,
  backgroundColor: '#3498db'
}
});
