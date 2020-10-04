import { IHeaderNavigationItem } from './navigationTypes'

import { SET_HEADER_NAVIGATION, TOGGLE_LOADER } from '../actions/navigation'

interface Action {
  type: string,
  payload?: any
}

export interface INavigationState {
  headerNavigation: IHeaderNavigationItem[],
  isFetching: boolean
}

const initialState: INavigationState = {
  headerNavigation: [],
  isFetching: true
}

const cart = (state: INavigationState = initialState, action: Action) => {
  switch (action.type) {
    case SET_HEADER_NAVIGATION:
      return {
        ...state,
        headerNavigation: action.payload
      }
    case TOGGLE_LOADER:
      return {
        ...state,
        isFetching: action.payload
      }

    default:
      return state
  }
}

export default cart