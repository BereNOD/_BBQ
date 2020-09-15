import { ICartItem } from './cartTypes'

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
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return state
    }
}

export default cart