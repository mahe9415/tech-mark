import React, { Components, Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';
import { listPosts } from './actions.js';
import Posts from './components/Posts.js';
import storeFactory from './store';
import RouterComponent from './Router.js'

const store = storeFactory;

export default class Dashboard extends Component{
    componentWillMount(){
        store.dispatch(
         listPosts('all')
        );
    }
    render(){
        return(
            <RouterComponent />
        );
    }
}
