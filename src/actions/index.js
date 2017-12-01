import axios from 'axios';

export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const DISPLAY_ACTIVE_BLOCK = 'DISPLAY_ACTIVE_BLOCK'; 


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// const API_KEY = 'cvbnmcvbnmcvbnmcvbnm';
const API_KEY = 'PAPERCLIP1234' 


export function fetchPosts(dispatch) {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

    return (dispatch) => {
        request.then(
            
            ({data}) => {
                dispatch({
                    type: POSTS_RECEIVED,
                    payload: {data}
                })
            }
        );
    }

    // return {
    //     type: FETCH_POSTS,
    //     payload: request
    // };
}

/**
 * 
 * @param {string} identifier - this will be text that will be displayed. 
 */
export function displayActiveBlock(identifier) {

    return (dispatch) => {
            
                dispatch({
                    type: DISPLAY_ACTIVE_BLOCK,
                    payload: identifier 
                })
    }
}
