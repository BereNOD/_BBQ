import { Dispatch } from "redux";

export const INCREASE = 'INCREASE'

export const increase = (quantity: number) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: INCREASE,
            payload: quantity
        })
    }
}
