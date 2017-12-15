import C from './store/constants.js';
// import fetch from 'isomorphic-fetch';
import { postsRef } from '.././firebase';

export const listPosts = value => dispatch =>{
postsRef.orderByChild('category')
          .on("value", (data) => {
              console.log("invoked from actions");
              dispatch({
                  type: C.FETCH_POSTS,
                  payload:data.val()
              });
          })
}