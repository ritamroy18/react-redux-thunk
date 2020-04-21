import { FETCH_POSTS_REQUEST,NEW_POSTS } from '../actions/types'

const initialState = {
    items : [],
    loading : false,
    page: 1
}


export default function (state = initialState,action){
    switch(action.type){
        case FETCH_POSTS_REQUEST : return{
            ...state,
            loading : true
        }
        // case FETCH_POSTS : return{
        //     ...state,
        //     items : action.payload
        // }
        case NEW_POSTS : return{
            ...state,
            loading : false,
            items : [...state.items,...action.payload],
            page : state.page + 1
        }

        default :
        return state;
    }

}
