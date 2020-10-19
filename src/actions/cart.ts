import { IStore } from './../reducers/types';
import { Dispatch } from "redux";
import { ICartItem } from "../reducers/cartTypes";
import number from "../sanitizers/number";
import axios from 'axios';

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

export const CHANGE_CART_USERNAME = 'CHANGE_CART_USERNAME'

export const changeCartUsername = (username: string) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: CHANGE_CART_USERNAME,
            payload: {
                username
            }
        })
    }
}

export const CHANGE_CART_PHONE = 'CHANGE_CART_PHONE'

export const changeCartUserPhone = (userPhone: any) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: CHANGE_CART_PHONE,
            payload: {
                userPhone
            }
        })
    }
}

export const CHANGE_PAYAMENT_TYPE = 'CHANGE_PAYAMENT_TYPE'

export const changePaymentType = (paymentType: string) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: CHANGE_PAYAMENT_TYPE,
            payload: {
                paymentType
            }
        })
    }
}

export const CHANGE_DELIVERY_TYPE = 'CHANGE_DELIVERY_TYPE'

export const changeDeliveryType = (deliveryType: string) => {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: CHANGE_DELIVERY_TYPE,
            payload: {
                deliveryType
            }
        })
    }
}


export const REFRESH_ORDER = 'REFRESH_ORDER'
export const FAILURE_ORDER = 'FAILURE_ORDER'
export const CREATE_ORDER = 'CREATE_ORDER'

export const createOrder = () => {
    return async (dispatch: Dispatch, getState: () => IStore) => {
        const { cart } = getState()
        try {
            await axios('/api/cart', {
                method: 'POST',
                data: cart
            })
            dispatch({
                type: REFRESH_ORDER
            })
        } catch (error) {
            dispatch({
                type: FAILURE_ORDER,
                payload: error
            })
        }
    }
}