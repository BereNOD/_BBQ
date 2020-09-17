import { Dispatch } from "redux"
import { IStore } from '../reducers/types'

export const FETCH_BISNESS_MENU = 'FETCH_BISNESS_MENU'

export const fetchBisnessMenu = (payload: IStore['menu']['bisness']) => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: FETCH_BISNESS_MENU,
      payload: payload
    })
  }
}