import { ICartItem } from './cartTypes'
import _ from 'lodash'

import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_CART_ITEM_QUANTITY, CHANGE_CART_USERNAME, CHANGE_CART_PHONE, REFRESH_ORDER, FAILURE_ORDER } from '../actions/cart'


interface Action {
    type: string,
    payload?: any
}

export interface ICartState {
    list: ICartItem[],
    name: string,
    phone: string,
    error: null | Error

}

const initialState: ICartState = {
    list: [],
    name: '',
    phone: '',
    error: null
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
        case CHANGE_CART_ITEM_QUANTITY:
            const index = _.findIndex(state.list, (item) => item.id === action.payload.id)
            if (index !== -1) {
                const item = {
                    ...state.list[index],
                    quantity: action.payload.quantity
                }
                state.list[index] = item
                return {
                    ...state,
                    list: [...state.list]
                }
            }
            return state
        case CHANGE_CART_USERNAME:
            return {
                ...state,
                name: action.payload.username
            }
        case CHANGE_CART_PHONE:
            return {
                ...state,
                phone: action.payload.userPhone
            }
        case REFRESH_ORDER:
            return initialState
        case FAILURE_ORDER:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default cart