interface Action {
  type: string,
  payload: any
}

const intialState = {
  bisness: null
}

const menu = (state = intialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_BISNESS_MENU':
      return {
        ...state,
        bisness: action.payload
      }
    default:
      return state
  }
}

export default menu