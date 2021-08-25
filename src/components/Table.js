import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions';
import ButtonCreate from './buttons/ButtonCreate';
import ButtonDelete from './buttons/ButtonDelete';
import ButtonUpdate from './buttons/ButtonUpdate';

export default function Tabla() {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.axiosDataReducer)

    useEffect(() => {

        dispatch(fetchData())


    }, [dispatch])

    console.log(data)


    return (
        <div className='container mt-5 mb-5'>
            <ButtonCreate />
            <table className="table table-striped table-hover caption-top ">
                <caption>Online Store</caption>
                <thead className='table-dark'>
                    <tr className='text-center'>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Category</th>
                        <th scope="col">Department</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((x, index) => (
                            <tr key={x.id}>
                                <th scope="col">{index + 1}</th>
                                <th scope="col">{x.name}</th>
                                <th scope="col">$ {x.cost.toFixed(2)}</th>
                                <th className='text-center'>
                                    {
                                        x.category.map((y, index) => (
                                            <span key={index * 0.125}>{y.name}</span>
                                        ))
                                    }
                                </th>
                                <th className='text-center'>
                                    {
                                        x.department.map((z, index) => (
                                            <span key={index * 0.225}>{z.name}</span>
                                        ))
                                    }
                                </th>
                                <th><ButtonUpdate /></th>
                                <th><ButtonDelete id={x.id} /></th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
