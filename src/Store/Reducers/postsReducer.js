const initialState = { Posts: [] }

function storePosts(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'STORE_POSTS':
            nextState = {
                ...state,
                Posts: action.value
            }
            return nextState || state
    default:
        return state
    }
  }

  export default storePosts
