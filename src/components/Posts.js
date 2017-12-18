import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class Posts extends Component {
    constructor(){
        super();
        // this.getListItem=this.getListItem.bind(this);
        // this.generateListItem=this.generateListItem.bind(this);
    }
    componentWillMount(){
        // setInterval(()=>  console.log(this.props.posts),5000)
    }
  
    // category
    // :
    // "Android"
    // description
    // :
    // "This is a list of 25 best Android libraries released in January and February 2017 which you may wish to try."
    // siteIcon
    // :
    // "https://cdn-static-1.medium.com/_/fp/icons/favicon-medium.TAS6uQ-Y7kcKgi0xjcYHXw.ico"
    // tags
    // :
    // {0: "Android", 1: "Libraries", 2: "freeCodeCamp"}
    // thumbnail
    // :
    // "https://cdn-images-1.medium.com/max/1200/1*3oNgt5C2JC5FucjUm2SPxg.jpeg"
    // title
    // :
    // "25 new Android libraries which you definitely want to try at the beginning of 2017"
    // url
    // :
    // "https://medium.freecodecamp.org/25-new-android-libraries-which-you-definitely-want-to-try-at-the-beginning-of-2017-45878d5408c0?source=false---------0"
    getListItem = (item=this.props.posts) => {
        console.log(item)
        console.log(typeof(this.props.posts));
        if(!item){
            console.log("no item")
            console.warn(this.props.posts);
           return (<Text>{" No List item" }</Text>);
        }
        else{
            console.log("item exits")
            return (
                <View>
            <Text> {item.category} </Text>
            <Text> {item}</Text>
            </View>
            );
        }
    }

    generateListItem = postArray =>
    <ListItem postArray={postArray}/>

    render() {
        return (
            <ScrollView>
           <ListItem style={{flex:1}} listItem={this.props.posts} /> 
           </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
      posts:state.posts.postArray
})


export default connect(mapStateToProps)(Posts);