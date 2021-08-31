import axios from "axios";
import { baseURL } from "../configuration/baseURL"
import { types } from '../redux/types/types'
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
                    msg: "Unable to select item"
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
                    deletedItem: { id }
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
export const createNewItem = async (id, name, cost, departmentName, departmentIdentification, categoryName, categoryId, dispatch, history) => {
    if (!isNaN(id) && id !== '') {
        try {
            await axios.post(baseURL, {
                "id": +id,
                "name": name,
                "cost": +cost,
                "department": [
                    {
                        "name": departmentName,
                        "identification": departmentIdentification
                    }
                ],
                "category": [
                    {
                        "name": categoryName,
                        "id": +categoryId
                    }
                ]
            })
            const selected = await axios.get(`${baseURL}${id}`)
            const { data } = selected

            dispatch({
                type: types.created,
                createdItem: data
            });

            Swal.fire({
                icon: 'success',
                title: 'Your new item has been created',
                showConfirmButton: false,
                timer: 1500
            })

            history.push('/')

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please enter a unique ID'
            })
            return dispatch({
                type: types.error,
                msg: 'Unable to create new item'

            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Please enter valid ID'
        })
    }

};

