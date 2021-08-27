import axios from "axios";
import { baseURL } from "../json-server/baseURL"
import { types } from '../types/types'
import Swal from "sweetalert2";


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
export const selectItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseURL}${id}`);
            const data = response.data;
            dispatch({
                type: types.selected,
                selectedItem: data
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

const sweetAlertConfirmDeleteItem = (id, dispatch) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
        .then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${baseURL}${id}`);
                dispatch({
                    type: types.delete,
                    deletedItem: 'Item deleted'
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
}

export const getItemDeleteGetItems = (id) => {
    return async (dispatch) => {

        try {
            dispatch(selectItem(id))
            sweetAlertConfirmDeleteItem(id, dispatch)

        } catch (error) {
            return dispatch(
                {
                    type: types.error,
                    msg: "Unable to delete item"
                });
        }
    };
};


//modify item
export const modifyItem = () => {

};


//create item
export const createNewItem = () => {

};

