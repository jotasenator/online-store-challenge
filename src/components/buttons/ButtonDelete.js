import React from 'react'
import { deleteData } from '../../actions/actions'

export default function ButtonDelete({ id }) {

    return (
        <div>
            <button
                className='btn btn-danger'
                onClick={deleteData(id)}
            >
                Delete
            </button>
        </div>
    )
}
