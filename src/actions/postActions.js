import { FETCH_POSTS,NEW_POSTS } from '../actions/types'

export const  fetchPosts =  () => dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    
}

export const  newPosts =  () => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: NEW_POSTS,
        payload: posts,
    }))

}