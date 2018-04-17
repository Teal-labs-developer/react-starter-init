/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GoogleSignin} from 'react-native-google-signin';
import { Root} from 'js/Navigators';





export default class App extends Component{




  componentDidMount(){
    GoogleSignin.hasPlayServices({autoResolve: true})
    .then(() => {
        
        GoogleSignin.configure({
            scopes:['profile','email'],
            iosClientId: "926726632019-5ev22j7nbkdl9ggeeub2hfhk70n7m0qm.apps.googleusercontent.com"
        })
            .then(() => {
                
            })
            .catch((err) => {
                console.log('SIGNIN', err);
            })
            .done();
    })
    .catch((err) => {
        console.log('SIGNIN', err);
    })
    .done();
  }

  _signIn = () => {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
            <Root/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
