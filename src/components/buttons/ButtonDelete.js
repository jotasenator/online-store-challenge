import React from 'react'
import { getItemDeleteGetItems } from '../../actions/actions'
import { useDispatch } from 'react-redux'

export default function ButtonDelete({ id }) {

    const dispatch = useDispatch()

    return (
        <div>
            <button
                className='btn btn-danger'
                onClick={() => dispatch(getItemDeleteGetItems(id))}
            >
                Delete
            </button>
        </div>
    )
}
