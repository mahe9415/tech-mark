import React, { Components, Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';
import { LoginForm } from '.components/LoginForm.js'

export default class Dashboard extends Component{
    render(){
        return(
            <View>
            <Header headerText="Curated Blog post" />
            <LoginForm />
            </View>
        );
    }
}