import React from 'react'
import { getItemDeleteGetData } from '../../actions/actions'
import { useDispatch } from 'react-redux'

export default function ButtonDelete({ id }) {

    const dispatch = useDispatch()

    return (
        <div>
            <button
                className='btn btn-danger'
                onClick={() => dispatch(getItemDeleteGetData(id))}
            >
                Delete
            </button>
        </div>
    )
}
