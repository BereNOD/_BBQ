import { ICartItem } from './cartTypes'
import _ from 'lodash'

import { ADD_TO_CART, DELETE_FROM_CART, INCREASE } from '../actions/cart'

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
        case ADD_TO_CART:
            if (state.list.find((item) => item.id === action.payload.id)) {
                return state
            }
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                list: _.filter(state.list, (item: ICartItem) => item.id !== action.payload)
            }
        default:
            return state
        case INCREASE:
            return {
                ...state,
                list: _.filter(state.list, (item: ICartItem) => item.quantity += 1)
            }
    }
}

export default cart