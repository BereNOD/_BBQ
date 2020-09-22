import { Dispatch } from "redux";

export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export const deleteCartItem = (id: number) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: DELETE_FROM_CART,
            payload: id
        })
    }
}
