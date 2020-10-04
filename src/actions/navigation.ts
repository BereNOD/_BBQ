import { Dispatch } from "redux";
import { IHeaderNavigationItem } from "../reducers/navigationTypes";

export const SET_HEADER_NAVIGATION = 'SET_HEADER_NAVIGATION'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'

export const fetchHeaderNavigation = () => {
  return (dispatch: Dispatch) => {
    fetch('/api/navigation')
      .then(response => response.json())
      .then((navigation: IHeaderNavigationItem[]) => dispatch({
        type: SET_HEADER_NAVIGATION,
        payload: navigation
      }))
  }
}

export const toggleLoader = (isFetching: boolean) => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: TOGGLE_LOADER,
      isFetching: isFetching
    })
  }
}

