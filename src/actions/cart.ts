import { Dispatch } from "redux";
import { ICartItem } from "../reducers/cartTypes";
import number from "../sanitizers/number";

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

export const CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY'

export const changeCartItemQuantity = (id: number, quantity: number | string) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: CHANGE_CART_ITEM_QUANTITY,
            payload: {
                id,
                quantity: number(quantity, { min: 0 })
            }
        })
    }
}
