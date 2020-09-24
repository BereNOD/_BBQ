import { Dispatch } from "redux";
import { ICatalogItem } from '../reducers/catalogTypes'

export const SET_CATALOG = 'SET_CATALOG'

export const fetchCatalog = () => {
    return (dispatch: Dispatch) => {
        fetch('/api/catalog')
            .then(response => response.json())
            .then((catalog: ICatalogItem[]) => dispatch({
                type: SET_CATALOG,
                payload: catalog
            }))
    }
}