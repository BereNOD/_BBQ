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