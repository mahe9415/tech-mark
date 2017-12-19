import C from './store/constants.js';
// import fetch from 'isomorphic-fetch';
import { postsRef } from '.././firebase';

import { Actions } from 'react-native-router-flux';

export const listPosts = value => dispatch =>{
	console.log("from actions")
postsRef.orderByChild('category')
          .on("value", (data) => {
              dispatch({
                  type: C.FETCH_POSTS,
                  payload:data.val()
              });
          })
}

export const setWebURL = url => dispatch =>{
	dispatch({
		type:C.SET_WEB_URL,
		url
	})
	Actions.web()
}

export const LoginSuccess = value=> dispatch =>{
	Actions.posts()
}


