import React, { Components, Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';
import { listPosts } from './actions.js';
import Posts from './components/Posts.js';
import storeFactory from './store';
import RouterComponent from './Router.js'
import { Font } from 'expo';
const store = storeFactory;

export default class Dashboard extends Component{


     render(){
        return(
            <RouterComponent />
        );
    }
}
