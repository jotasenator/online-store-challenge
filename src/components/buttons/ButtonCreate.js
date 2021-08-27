import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonCreate() {


    return (
        <div>
            <button
                className='btn btn-success float-right'>
                <Link to={'/create'}>Create</Link>
            </button>
        </div>
    )
}
