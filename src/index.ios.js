import React, { Components, Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';
import { listPosts } from './actions.js';
import  LoginForm from './components/LoginForm.js';
import storeFactory from './store';
import RouterComponent from './Router.js'

import Posts from './components/Posts.js'

export default class Dashboard extends Component{
    render(){
        return(
        	<RouterComponent/>
        );
    }
}
