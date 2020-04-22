import { FETCH_POSTS_REQUEST,NEW_POSTS } from '../actions/types'

const initialState = {
    loading : false,
}


export default function (state = initialState,action){
    switch(action.type){
        case FETCH_POSTS_REQUEST : return{
            ...state,
            loading : true
        }
        case NEW_POSTS : return{
            ...state,
            loading : false,
          
        }
        default :
        return state;
    }

}
