import { ICartItem } from './cartTypes'
import _ from 'lodash'

interface Action {
    type: string,
    payload?: any
}

export interface ICartState {
    list: ICartItem[]
}

const initialState: ICartState = {
    list: []
}

const cart = (state: ICartState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.list.find((item) => item.id === action.payload.id)) {
                return state
            }
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case 'DELETE_FROM_CART':
            return {
                ...state,
                list: _.filter(state.list, (item: ICartItem) => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default cart