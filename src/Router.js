import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js'
import Login from './components/Login.js'
import InAppWeb from './components/InAppWeb.js'
import Posts from './components/Posts.js';
import NativeLogin from './components/NativeLogin.js';
import NativeListView from './components/NativeListView.js';


const RouterComponent = () =>{
	return(
		<Router sceneStyle={{paddingTop:15}}>
			<Scene key="root" hideNavBar>
				<Scene key="login" component={NativeLogin} title="Login" initial/>
				<Scene key="post" component={Posts}/>
				<Scene key="web" component={InAppWeb} />
				<Scene key="posts" component={NativeListView} />
			</Scene>
		</Router>
		);
}
export default RouterComponent;