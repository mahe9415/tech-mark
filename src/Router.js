import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js'
import Login from './components/Login.js'
import InAppWeb from './components/InAppWeb.js'
import Posts from './components/Posts.js';

const RouterComponent = () =>{
	return(
		<Router sceneStyle={{paddingTop:15}}>
			<Scene key="root" hideNavBar>
				<Scene key="login" component={LoginForm} title="Login" initial/>
				<Scene key="posts" component={Posts}/>
				<Scene key="web" component={InAppWeb} />
			</Scene>
		</Router>
		);
}
export default RouterComponent;