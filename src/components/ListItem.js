import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common/CardSection';


export default class ListItem extends Component {
    
    constructor(){
        super();
        this.gentemp=this.gentemp.bind(this);
        // this._handlePress=this._handlePress.bind(this);
    }

    gentemp(list){
      return Object.values(list).map(listObj=>{
          return Object.values(listObj).map((item,index)=>{
              // let imgUrl=item.thumbnail
        return (
            <View key={index}>
            <CardSection>
            <Text style={styles.itemTitle}>
                {item.category}
            </Text>
            </CardSection>
                <TouchableOpacity onPress={ () => { console.log("hello"); } } key={ item } style={{flex:1}}>
                <Image source={{uri: item.thumbnail}}
                key={item.thumbnail}     
                style={{flex:1 ,height:300, paddingHorizontal:10}} />
                </TouchableOpacity>
            </View>
        )})
      })
    }

    render() {
        return(
            <View style={{flex:1}}>
            {this.gentemp(this.props.listItem)}
            </View>

        )}
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