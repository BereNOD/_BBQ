import { IBisnessMenu } from './menuTypes'

interface Action {
  type: string,
  payload?: any
}

export interface IMenuState {
  bisness: IBisnessMenu | null
}

const intialState = {
  bisness: null
}

const menu = (state: IMenuState = intialState, action: Action) => {
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