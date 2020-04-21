import { FETCH_POSTS_REQUEST,NEW_POSTS } from '../actions/types'
export const  fetchPostsRequest = () =>{
    return {
        type : FETCH_POSTS_REQUEST
    }
}

// export const  fetchPosts =  () => dispatch =>{
//         fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }))
    
// }


export const newPosts = (data) => {
    console.log(data.posts);
    console.log(data.val);
    return (dispatch) => {
        dispatch(fetchPostsRequest())
        // setTimeout(() =>{
            // fetch(`https://jsonplaceholder.typicode.com/posts/?_start=${data.posts}&_limit=${data.val}`)

            fetch(`https://api.unsplash.com/photos/?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02&per_page=${data.val}&page=${data.posts}`)
            .then(res => res.json())
            .then(posts => dispatch({
                type: NEW_POSTS,
                payload: posts,
            }))
        // },2000)
   
    }
}