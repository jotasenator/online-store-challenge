import axios from 'axios'
import React from 'react'
// import { createNewItem } from '../actions/actions'
import { useForm } from '../hooks/useForm'
import { baseURL } from '../json-server/baseURL'
import { useDispatch } from 'react-redux';
import { types } from '../types/types';

import Swal from 'sweetalert2'



export default function CreateItem() {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        id: '',
        name: '',
        cost: '',
        departmentName: '',
        departmentIdentification: '',
        categoryName: '',
        categoryId: ''
    })

    const {
        id,
        name,
        cost,
        departmentName,
        departmentIdentification,
        categoryName,
        categoryId } = formValues

    const handleCreate = async (e) => {
        e.preventDefault()
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
    }



    return (
        <div className='container bg-light'>
            <form className='mt-3' onSubmit={handleCreate}>
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Id'
                    placeholder='Id'
                    name='id'
                    autoComplete='off'
                    value={id}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Name'
                    placeholder='Name'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Cost'
                    placeholder='Cost'
                    name='cost'
                    autoComplete='off'
                    value={cost}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Name'
                    placeholder='Department Name'
                    name='departmentName'
                    autoComplete='off'
                    value={departmentName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Identification'
                    placeholder='Department Identification'
                    name='departmentIdentification'
                    autoComplete='off'
                    value={departmentIdentification}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Name'
                    placeholder='Category Name'
                    name='categoryName'
                    autoComplete='off'
                    value={categoryName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Id'
                    placeholder='Category Id'
                    name='categoryId'
                    autoComplete='off'
                    value={categoryId}
                    onChange={handleInputChange} />

                <button className='btn btn-success ' type=' submit'>
                    Create New Item
                </button>
            </form>
        </div>
    )
}
