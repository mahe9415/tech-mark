import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src';
import { app } from './firebase.js'
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducers from './src/store/reducers.js';
import store from './src/store';
import { NativeModules } from 'react-native'
import { Font } from 'expo';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

export default class App extends React.Component {



async componentWillMount() {
      await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}

  render() {
    return (
      <Provider store={store}>
      <Dashboard />
      </Provider>
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
