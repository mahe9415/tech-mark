import React, {Component} from 'react';
import { View, StyleSheet, Text, WebView } from 'react-native';
import { Input, Spinner, Card, CardSection, Button } from './common';

import { connect } from 'react-redux';

class InAppWeb extends Component{  
    constructor(){
        super();
    }
componentWillMount(){
	setInterval(()=>console.log(this.props.WebUrl),5000)
}
render(){
	return (
		<WebView
        source={{uri:this.props.WebUrl}}
      /> 
      );
}

}


const mapStateToProps = state => ({
      WebUrl:state.post
})

export default connect(mapStateToProps)(InAppWeb);