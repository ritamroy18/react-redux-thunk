import { FETCH_POSTS_REQUEST } from '../actions/types'

const initialState = {
    loading : false,
}


export default function (state = initialState,action){
    switch(action.type){
        case FETCH_POSTS_REQUEST : return{
            ...state,
            loading : true
        }
        default :
        return state;
    }

}
