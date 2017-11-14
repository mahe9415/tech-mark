import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Spinner, Card, CardSection, Button } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            error:''
            // this.onEmailTextChange=onEmailTextChange.bind(this);
    }
    this.onLoginSubmit=this.onLoginSubmit.bind(this);
}


onLoginSubmit(){
    const {email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch((data)=>{
                    this.setState({error:data});
                })
        })
}

    render(){
    return (
        <View>
        <Card>
            <CardSection>
                <Input 
                    label="Email"
                    placeholder="user@gmail.com"
                    autoCorrect={false}
                    value={this.state.email}                 
                    onChangeText={email => this.setState({ email })}
                    />
            </CardSection>
            <CardSection>
                <Input
                    label = "Password"
                    placeholder = "Password"
                    autoCorrect = {false}
                    secureTextEntry
                    value={ this.state.password }
                    onChangeText={ password => this.setState({ password })}
                />
            </CardSection>
            <CardSection>
                <Button onPress={this.onLoginSubmit}>
                Login
                </Button>    
            </CardSection>
            
        </Card>
            <Text style={styles.ErrorText}>{this.state.error}</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    wrapView:{
        flex:1
    },
    wrapButton : {
        flex:1
    },
    ErrorText:{
        color:'red',
        alignSelf:'center'
        // justifyContent:'center'
    }
})