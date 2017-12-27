import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import { Spinner, Card, CardSection} from './common';
import { app, postsRef } from '../../firebase.js';
import { LoginSuccess, is_fetching, Login } from '../actions.js';
import storeFactory from '../store';

class NativeLogin extends Component {

	    constructor(props) {
        super(props);
        this.state = {
            email:'mahesh9415@gmail.com',
            password:'12345678',
            error:''
    }

    	this.onLoginSubmit=this.onLoginSubmit.bind(this);
    	this.getPosts=this.getPosts.bind(this);
      // setInter
	}


    async componentWillMount(){
              console.log(this.props.is_login)
    if(this.props.is_login){
        await this.props.LoginSuccess()
    }
} 
	onLoginSubmit(){
    this.props.LoginMe(this.state.email,this.state.password)
		}
	getPosts(){
          postsRef.orderByChild('category')
            .on("value", (data) => {
            })
          return
      
		}
  	render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username"  label="Email"
                    placeholder="user@gmail.com"
                    autoCorrect={false}
                    value={this.state.email}                 
                    onChangeText={email => this.setState({ email })} />
            </Item>
            <Item last>
              <Input placeholder="Password"
              		label = "Password"
                    autoCorrect = {false}
                    secureTextEntry
                    value={ this.state.password }
                    onChangeText={ password => this.setState({ password })} />
            </Item>
            	<Button style={{marginHorizontal:20}} block onPress={this.onLoginSubmit}>
            		<Text>Login</Text>
          		</Button>
              <Text>{this.props.fromStore}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
is_fetching:state.is_fetching,
is_login:state.is_login,
fromStore:state.fromStore
})

const mapDispatchToProps = dispatch =>  ({
        LoginMe: (email,password) => dispatch(Login(email,password)),
        LoginSuccess: ()=> dispatch( LoginSuccess() )
    })


export default connect(mapStateToProps,mapDispatchToProps)(NativeLogin);
