import React, { Components, Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';
import  LoginForm from './components/LoginForm.js'
import RouterComponent from './Router.js'

import Posts from './components/Posts.js'
export default class Dashboard extends Component{
    render(){
        return(
        	<RouterComponent/>
        );
    }
}
