import axios from "axios";
import { baseURL } from "../json-server/baseURL"
import { types } from '../types/types'


// get items
export const getItems = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(baseURL);
            const data = response.data;
            dispatch({
                type: types.get,
                data: data
            });
        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to get items"
                });
        }
    };
};


//delete item
const selectItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseURL}${id}`);
            const data = response.data;
            dispatch({
                type: types.delete,
                deletedItem: data
            });
        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to select item for delete"
                });
        }
    };
}

export const getItemDeleteGetItems = (id) => {
    return async (dispatch) => {
        dispatch(selectItem(id))
        try {
            await axios.delete(`${baseURL}${id}`);

        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to delete item"
                });
        }
        dispatch(getItems())
    };
};


//modify item
export const modifyItem = (id, dataModified) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseURL}${id}`, dataModified);
            const data = response.data;
            dispatch({
                type: types.modify,
                modify: data
            });
        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to modify item"
                });
        }
        dispatch(getItems())
    };
};


//create item
export const modifyItem = (id, dataModified) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseURL}${id}`, dataModified);
            const data = response.data;
            dispatch({
                type: types.modify,
                modify: data
            });
        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to modify item"
                });
        }
        dispatch(getItems())
    };
};
