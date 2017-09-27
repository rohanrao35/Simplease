import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';


// <Text style={{alignItems: 'center'}}
//
//     style={{fontSize: 40}}>
//     Simplease
// </Text>


//import LoginInput from './LoginInput.js'
//<View style={{width: 375, height: 670, backgroundColor: 'skyblue'}} />
export default class Login extends Component {

  render(){

    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>


          <View style={styles.logoContainer}>

              <Image
                style={styles.logo}
                source={require('../../Logo/d.png')}
              />
          </View>
          <TextInput
            placeholder='Username'
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            returnKeyType="go"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.passwordInput = input}
          />

          <View style={{margin:0}} />

          <TouchableOpacity style={styles.button}>

                  <Text style={styles.buttonText}>LOGIN</Text>

          </TouchableOpacity>

          <Button style={styles.otherButton}
              title="Create an account"
          />
          <Button style={styles.otherButton}
              title="Continue as guest"
          />



    </KeyboardAvoidingView>
    );

    function onCreateAccountPress() {

      <View>
      <Text>HELLO</Text>
      </View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:0,
    paddingHorizontal: 30,
    backgroundColor: '#ecf0f1',
    width: 375,
    height:667,
    justifyContent: 'center',
    //alignItems: 'center'
  },
input: {
  height: 40,
  backgroundColor: '#bdc3c7',
  marginBottom: 20,
  paddingHorizontal: 10,
  //paddingVertical: 10,
  color: '#ecf0f1'
},
button: {
  paddingVertical: 30,
  backgroundColor: '#3498db',
  height: 20,
  marginBottom: 0
},
buttonText: {
  textAlign: 'center',
  color: '#FFF',

},
logoContainer: {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center'
},
logo: {
  paddingVertical: 20,
  width: 400,
  height: 300
},
otherButton: {
  paddingVertical: 0
}

});
