import { FETCH_POSTS,NEW_POSTS } from '../actions/types'

export const  fetchPosts =  () => dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    
}

// export const  newPosts =  () => dispatch =>{
//     fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${postLength}`)
//     .then(res => res.json())
//     .then(posts => dispatch({
//         type: NEW_POSTS,
//         payload: posts,
//     }))

// }

export const newPosts = (data) => {
    console.log(data.posts);
    console.log(data.val);
    return (dispatch) => {
        setTimeout(() =>{
            fetch(`https://jsonplaceholder.typicode.com/posts/?_start=${data.posts}&_limit=${data.val}`)
            .then(res => res.json())
            .then(posts => dispatch({
                type: NEW_POSTS,
                payload: posts,
            }))
        },2000)
   
    }
}