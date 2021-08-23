import axios from "axios";
import { baseURL } from "../json-server/baseURL"
import { types } from '../types/types'


// get data
export const fetchData = () => {
    return (dispatch) => {
        return axios.get(baseURL)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: types.get,
                    data: data
                })
            })
            .catch(error => dispatch(
                {
                    type: types.error,
                    msg: "Unable to fetch data"
                }));
    };
};
//delete data
export const deleteData = (id) => {
    return (dispatch) => {
        return axios.get(`${baseURL}${id}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                console.log(data)
                dispatch({
                    type: types.error,
                    deletedItem: data
                })
            })
            .catch(error => dispatch(
                {
                    type: types.error,
                    msg: "Unable to delete data"
                }));

    };
};
//modify data
export const modifyData = (id) => {
    return (dispatch) => {
        return axios.put(`${baseURL}${id}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: types.modify,
                    data: data
                })
            })
            .catch(error => dispatch(
                {
                    type: types.error,
                    msg: "Unable to modify data"
                }));
    };
};
//create data
export const createData = (newId, newName, newCost, newDepartmentName, newCategoryName) => {
    return (dispatch) => {
        return axios.post(baseURL, {
            newId,
            newName,
            newCost,
            newDepartmentName,
            newCategoryName
        })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: types.modify,
                    data: data
                })
            })
            .catch(error => dispatch(
                {
                    type: types.error,
                    msg: "Unable to create data"
                }));
    };
};
