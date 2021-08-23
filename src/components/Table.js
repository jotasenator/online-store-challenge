import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions';

export default function Tabla() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())

    }, [dispatch])
    const { data } = useSelector(state => state.axiosDataReducer)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr >
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Category</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(x => (
                            <tr key={x.id}>
                                <th scope="col">{x.id}</th>
                                <th scope="col">{x.name}</th>
                                <th scope="col">{x.cost}</th>
                                <th>
                                    {
                                        x.category.map((y, index) => (
                                            <span key={index * 0.125}>{y.name}</span>
                                        ))
                                    }
                                </th>
                                <th>
                                    {
                                        x.department.map((z, index) => (
                                            <span key={index * 0.225}>{z.name}</span>
                                        ))
                                    }
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
