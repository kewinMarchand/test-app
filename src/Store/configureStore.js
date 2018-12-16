import { createStore, combineReducers } from 'redux'
import storeUsers from './Reducers/usersReducer'
import storePosts from './Reducers/postsReducer'

const rootReducer = combineReducers({
    storeUsers,
    storePosts
})

export default createStore(rootReducer)
