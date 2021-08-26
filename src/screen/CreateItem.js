import axios from 'axios'
import React from 'react'
import { useForm } from '../hooks/useForm'
import { baseURL } from '../json-server/baseURL'


export default function CreateItem() {
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
    }



    return (
        <div className='container bg-light'>
            <form className='mt-3' onSubmit={handleCreate}>
                <input
                    className='input mb-1 p-3'
                    type='text'
                    placeholder='Id'
                    name='id'
                    autoComplete='off'
                    value={id}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    placeholder='Name'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    placeholder='Cost'
                    name='cost'
                    autoComplete='off'
                    value={cost}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    placeholder='Department Name'
                    name='departmentName'
                    autoComplete='off'
                    value={departmentName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    placeholder='Department Identification'
                    name='departmentIdentification'
                    autoComplete='off'
                    value={departmentIdentification}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    placeholder='Category Name'
                    name='categoryName'
                    autoComplete='off'
                    value={categoryName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
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
