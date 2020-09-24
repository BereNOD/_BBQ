import { IHeaderNavigationItem } from './navigationTypes'

import { SET_HEADER_NAVIGATION } from '../actions/navigation'

interface Action {
    type: string,
    payload?: any
}

export interface INavigationState {
  headerNavigation: IHeaderNavigationItem[]
}

const initialState: INavigationState = {
  headerNavigation: []
}

const cart = (state: INavigationState = initialState, action: Action) => {
    switch (action.type) {
        case SET_HEADER_NAVIGATION:
            return {
                ...state,
              headerNavigation: action.payload
            }
        default:
            return state
    }
}

export default cart