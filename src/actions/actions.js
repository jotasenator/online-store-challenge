import axios from "axios";
import { baseURL } from "../json-server/baseURL"
import { types } from '../types/types'


// asynchronous action creator
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
