import axios from 'axios'
import React from 'react'

import { useForm } from '../hooks/useForm'
import { baseURL } from '../json-server/baseURL'
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../types/types';

import Swal from 'sweetalert2'


export default function UpdateItem(
    {
        id = 20,
        name = 'perico',
        cost = 1000000,
        departmentName = 'Novela',
        departmentIdentification = 'Brasilenha',
        categoryName = '9pm',
        categoryId = 91

    }
) {

    const dispatch = useDispatch()
    // const { data } = useSelector(state => state.axiosDataReducer)

    // console.log(data)

    // const selectedItemtoModify = data?.filter(x => x.id === id)

    // console.log(selectedItemtoModify[0]?.name)
    // console.log(selectedItemtoModify[0]?.cost)
    // console.log(selectedItemtoModify[0]?.department[0].name)
    // console.log(selectedItemtoModify[0]?.department[0].identification)
    // console.log(selectedItemtoModify[0]?.category[0].name)
    // console.log(selectedItemtoModify[0]?.category[0].id)

    // const name = selectedItemtoModify[0]?.name
    // const cost = selectedItemtoModify[0]?.cost
    // const departmentName = selectedItemtoModify[0]?.department[0].name
    // const departmentIdentification = selectedItemtoModify[0]?.department[0].identification
    // const categoryName = selectedItemtoModify[0]?.category[0].name
    // const categoryId = selectedItemtoModify[0]?.category[0].id


    const [formValues, handleInputChange] = useForm({

        newName: name,
        newCost: cost,
        newDepartmentName: departmentName,
        newDepartmentIdentification: departmentIdentification,
        newCategoryName: categoryName,
        newCategoryId: categoryId
    })

    const {
        newName,
        newCost,
        newDepartmentName,
        newDepartmentIdentification,
        newCategoryName,
        newCategoryId } = formValues

    const handleUpdateItem = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${baseURL}${id}`, {
                "id": +id,
                "name": newName,
                "cost": +newCost,
                "department": [
                    {
                        "name": newDepartmentName,
                        "identification": newDepartmentIdentification
                    }
                ],
                "category": [
                    {
                        "name": newCategoryName,
                        "id": +newCategoryId
                    }
                ]
            })
            const modified = await axios.get(`${baseURL}${id}`)
            const { data } = modified

            dispatch({
                type: types.modify,
                modifiedItem: data
            });
            Swal.fire({
                icon: 'success',
                title: 'Your item has been modified',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Unable to modify item, who passes the id?'
            })
            return dispatch({
                type: types.error,
                msg: 'Unable to modify item'
            })
        }
    }

    return (
        <div className='container mb-5 pb-3 bg-light'>
            <form className='mt-3' onSubmit={handleUpdateItem}>

                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Name'
                    placeholder='Name'
                    name='newName'
                    autoComplete='off'
                    value={newName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Cost'
                    placeholder='Cost'
                    name='newCost'
                    autoComplete='off'
                    value={newCost}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Name'
                    placeholder='Department Name'
                    name='newDepartmentName'
                    autoComplete='off'
                    value={newDepartmentName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Identification'
                    placeholder='Department Identification'
                    name='newDepartmentIdentification'
                    autoComplete='off'
                    value={newDepartmentIdentification}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Name'
                    placeholder='Category Name'
                    name='newCategoryName'
                    autoComplete='off'
                    value={newCategoryName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Id'
                    placeholder='Category Id'
                    name='newCategoryId'
                    autoComplete='off'
                    value={newCategoryId}
                    onChange={handleInputChange} />

                <button className='btn btn-success ' type=' submit'>
                    Modify Item
                </button>
            </form>
        </div>
    )
}
