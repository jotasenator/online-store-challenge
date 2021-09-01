import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

export default function ButtonCreate() {


    return (
        <div>
            <button
                className='btn btn-primary float-right'>
                <BrowserRouter>
                    <Link to={'/create'}>Create</Link>
                </BrowserRouter>
            </button>
        </div>
    )
}
