import { ICatalogItem } from './catalogTypes'
import { SET_CATALOG } from '../actions/catalog'

interface Action {
    type: string,
    payload?: any
}

export interface ICatalogState {
    list: ICatalogItem[]
}

const intialState = {
    list: []
}

const catalog = (state: ICatalogState = intialState, action: Action) => {
    switch (action.type) {
        case SET_CATALOG:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default catalog