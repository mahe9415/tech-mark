import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Spinner, Card, CardSection, Button } from './common';
import { app, postsRef } from '../../firebase.js';
import { LoginSuccess } from '../actions.js';
import storeFactory from '../store'
import { connect } from 'react-redux';

 class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'mahesh9415@gmail.com',
            password:'12345678',
            error:''
    }
    
    this.onLoginSubmit=this.onLoginSubmit.bind(this);
    this.getPosts=this.getPosts.bind(this);
}
async componentWillMount(){
    if(this.props.is_login){
        console.log(this.props.is_login)
        await this.props.LoginSuccess()
    }
}

getPosts(){
          postsRef.orderByChild('category')
            .on("value", (data) => {
            })
          return
}

onLoginSubmit(){
        store.dispatch(LoginSuccess())
        const {email, password } = this.state;
        app.auth().signInWithEmailAndPassword(email, password)
            .then((user)=>{
            this.getPosts();
             })
            .catch((data)=>{
                // this.setState({error:data.message});
            })
}

onSignUpSubmit(){
    const {email, password } = this.state;
    app.auth().createUserWithEmailAndPassword(email, password)
        .catch((data)=>{
            this.setState({error:data});
        })
}

    render(){
    return (
        <View style={{flex:1}}>
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

const mapStateToProps = store =>{
    is_login: store.is_login
}
const mapDispatchToProps = dispatch =>{
    LoginSuccess: ()=> dispatch(LoginSuccess(true))
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
        alignSelf:'center',
        paddingHorizontal:30
        // justifyContent:'center'
    }
})



export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);