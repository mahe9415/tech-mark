import React, { Components, Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';
import { listPosts } from './actions.js';
import Posts from './components/Posts.js';
import storeFactory from './store';

const store = storeFactory;

export default class Dashboard extends Component{
    componentWillMount(){
        store.dispatch(
         listPosts('all')
        );
        // setInterval(()=>console.log(store.getState()),5000)
    }
    render(){
        return(
            <ScrollView>
            <Header headerText="Curated Blog posts" />
            <LoginForm />
            <Posts />
            </ScrollView>
        );
    }
}
