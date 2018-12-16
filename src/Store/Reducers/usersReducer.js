const initialState = { Users: [] }

function storeUsers(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'STORE_USERS':
            nextState = {
                ...state,
                Users: action.value
            }
            return nextState || state
    default:
        return state
    }
  }

  export default storeUsers
