import {combineReducers} from 'redux'
import postReducer from './postReducer'
import loadReducer from './loadReducer'
export default combineReducers({
    posts : postReducer,
    loading : loadReducer
})

// const rootReducers = combineReducers({
//     posts : postReducer
// })

// export default rootReducers