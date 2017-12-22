import C from './store/constants.js';
// import fetch from 'isomorphic-fetch';
import { app, postsRef } from '.././firebase';
import { Actions } from 'react-native-router-flux';
import store from './store'


export const listPosts = async (dispatch) => {

 	return await postsRef.orderByChild('category')
          .on("value", (data) => {
              dispatch({
                  type: C.FETCH_POSTS,
                  payload:data.val()
              });
              Actions.posts()
          })
}

export const setWebURL = url => dispatch =>{
	dispatch({
		type:C.SET_WEB_URL,
		url
	})
	Actions.web();
	return;
}

export const Login = (email,password) => dispatch =>{ 
		    app.auth().signInWithEmailAndPassword(email, password)
		        .then((user)=>{
		        	dispatch({
		        		type:"GREET",
		        		payload:"Helllllll"
		        	})
		        	dispatch({
		        		type:C.SET_USER_DATA,
		        		payload:user
		        	})
		        	dispatch({
		        		type:C.LOGGED_IN,
		        		payload:true
		        	})
		        	
		        	listPosts(dispatch)

		         })
		        .catch((data)=>{
		        	console.log(data)
		        })
}



export const LoginSuccess = value=> dispatch =>{
	Actions.posts()
}


