import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Spinner, Card, CardSection, Button } from './common';
import { app, postsRef } from '../../firebase.js'

export default class LoginForm extends Component{

    render(){
    return (
        <View>
        <Text>"hjk"</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    wrapView:{
        flex:1
    },
    wrapButton : {
        flex:1
    },
    ErrorText:{
        color:'red',
        alignSelf:'center',
        paddingHorizontal:30
        // justifyContent:'center'
    }
})