import {combineReducers} from 'redux'
import postReducer from './postReducer'

export default combineReducers({
    posts : postReducer
})

// const rootReducers = combineReducers({
//     posts : postReducer
// })

// export default rootReducers