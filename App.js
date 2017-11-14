import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src';
import firebase from 'firebase';


export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
            apiKey: "AIzaSyCu2o1CHFHtDCk8XD2FnSQIGUByXN7r1j0",
            authDomain: "tech-blog-70fe9.firebaseapp.com",
            databaseURL: "https://tech-blog-70fe9.firebaseio.com",
            projectId: "tech-blog-70fe9",
            storageBucket: "tech-blog-70fe9.appspot.com",
            messagingSenderId: "141605814096"
    });
   
}
  render() {
    return (
      <View>
      <Dashboard />
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
