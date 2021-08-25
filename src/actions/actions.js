import axios from "axios";
import { baseURL } from "../json-server/baseURL"
import { types } from '../types/types'


// get data
export const fetchData = () => {
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
                    msg: "Unable to fetch data"
                });
        }
    };
};
//delete data
export const getItemDeleteGetData = (id) => {
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
                    msg: "Unable to select data for delete"
                });
        }
        try {
            await axios.delete(`${baseURL}${id}`);

        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to delete data"
                });
        }
        dispatch(fetchData())
    };
};
