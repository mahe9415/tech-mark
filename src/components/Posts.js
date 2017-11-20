import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';


class Posts extends Component {
    constructor(){
        super()
        this.getListItem=this.getListItem.bind(this);
    }
    componentWillMount(){
        // setInterval(()=>  console.log(this.props,"from post component"),2000)
      
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
    getListItem(item){
        console.log(item)
        if(item.length <= 0){
           return (<Text>{" No List item" }</Text>);
        }
        else{
            return (
                <View>
            <Text> {item.url} </Text>
            <Text> {item}</Text>
            </View>
            );
        }
    }
    render() {
        return (
            <View>
               <FlatList
          data={this.props.posts}
          extraData={this.props.posts}
          renderItem={this.getListItem}
        />
            </View>
        );
    }
}

const mapStateToProps = state => ({
      posts:state.feedLists.posts
})


export default connect(mapStateToProps)(Posts);