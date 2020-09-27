import { Dispatch } from "redux";
import { ICartItem } from "../reducers/cartTypes";

export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (item: ICartItem) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: ADD_TO_CART,
            payload: item
        })
    }
}

export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export const deleteCartItem = (id: number) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: DELETE_FROM_CART,
            payload: id
        })
    }
}

export const INCREASE = 'INCREASE'

export const increase = (quantity: number) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: INCREASE,
            payload: quantity
        })
    }
}
