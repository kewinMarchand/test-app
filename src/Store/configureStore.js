import { createStore, combineReducers } from 'redux'
import storeUsers from './Reducers/usersReducer'
import storePosts from './Reducers/postsReducer'
import storeLaws from './Reducers/lawsReducer'

const rootReducer = combineReducers({
    storeUsers,
    storePosts,
    storeLaws
})

export default createStore(rootReducer)
