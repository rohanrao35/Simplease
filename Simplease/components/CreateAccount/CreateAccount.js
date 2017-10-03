import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';


//import LoginInput from './LoginInput.js'
//<View style={{width: 375, height: 670, backgroundColor: 'skyblue'}} />
export default class CreateAccount extends Component {

  render(){

    var validator = require("email-validator");

    return (

        

        

      <KeyboardAvoidingView behavior="padding" style={styles.container}>

          <Text style={{alignItems: 'center'}}

              style={{fontSize: 40}}>
              Simplease
          </Text>
          <View>
          <TextInput
            placeholder='Username'

            // value=this.state.text

            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'

          // value=this.state.text
            
            returnKeyType="go"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.passwordInput = input}
          />

          <TextInput
            placeholder='Re-enter Password'

          // value=this.state.text
            
            returnKeyType="go"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.passwordInput = input}
          />

          <TextInput
            placeholder='E-mail'


            onChangeText={(text) => this.validateEmail}
            //value={this.state.email}

          // value=this.state.text
            
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}

          />

          <TextInput
            placeholder='First Name'

          // value=this.state.text
            
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />


          <TextInput
            placeholder='Last Name'

          // value=this.state.text
            
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          

          </View>
          
          <View style={{margin:0}} />

          <TouchableOpacity style={styles.button}>

                  <Text style={styles.buttonText}>Submit</Text>

          </TouchableOpacity>




    </KeyboardAvoidingView>
    );

   

    function validateEmail() {
      if (validator.validate(text)) {
            
      }
      else {
        style={styles:error}
        console.log("invalid")

      }

    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
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
  paddingVertical: 25,
  backgroundColor: '#3498db',
  height: 20,
  marginBottom: 50
},
buttonText: {
  textAlign: 'center',
  color: '#FFF',

},
error: {
backgroundColor: '#ff0000'
}
});
