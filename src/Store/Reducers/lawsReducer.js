const initialState = { Laws: [] }

function storeLaws(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'STORE_LAWS':
            nextState = {
                ...state,
                Laws: action.value
            }
            return nextState || state
    default:
        return state
    }
  }

  export default storeLaws
