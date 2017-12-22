import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from './common';
import { View, ScrollView, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';

// import  store from '../store';
import { Container, Header, Content , Form,  Input, Button, Text, ListView, List, ListItem, Icon } from 'native-base';
import _ from 'lodash'

export class NativeListView extends Component{
	constructor(props){
		super(props)
		this._generate_card=this._generate_card.bind(this)
	}

	 _generate_card(item){
	 return <ListItem>
	 	<Text>{item.url}</Text>
	 	                <TouchableOpacity onPress={ () => { store.dispatch(setWebURL(item.url)) } } key={ item } style={{flex:1}}>
                <Image source={{uri: item.thumbnail}}
                key={item.thumbnail}     
                style={{flex:1 ,height:300, paddingHorizontal:10}} />
                </TouchableOpacity>
	 </ListItem>
	}

	render () {
		return (
      	<Container>
          <Content>
          <List dataArray={_.toArray(this.props.listItems)}
            renderRow={(item)=>this._generate_card(item)}
            >
          </List>
        </Content>
      </Container>
    );
	};

	
}
	const styles = {
    wrapView:{
        flex:1
    },
    itemTitle:{
        color:'#007aff',
        flex:1,
        textAlign:'center'
    }
    ,
    ErrorText:{
        color:'red',
        alignSelf:'center',
        paddingHorizontal:30
        // justifyContent:'center'
    }
}


mapStateToProps = state =>({
 	listItems:state.posts.postArray[0]
})



export default connect(mapStateToProps)(NativeListView);
