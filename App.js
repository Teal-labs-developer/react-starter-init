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
import {GoogleSignin,GoogleSigninButton} from 'react-native-google-signin';
import OneSignal from 'react-native-onesignal';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://48b5e82775d24ff5862b214bfaff54f5:bf4a2331f7974e39955f38a2b6aca1c3@sentry.io/1189658').install();



export default class App extends Component{


  componentWillMount(){
    OneSignal.addEventListener('ids', this.onIds);
  }

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

  onIds(device) {
		console.log('Device info: ', device);
  }

  _signIn = () => {
    console.log("Hmmmmmm");
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
    let b = null;
    console.log(b.sur);
    return (
      <View style={styles.container}>
            <GoogleSigninButton
                style={{width: 48, height: 48}}
                size={GoogleSigninButton.Size.Icon}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => this._signIn()}/>
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
