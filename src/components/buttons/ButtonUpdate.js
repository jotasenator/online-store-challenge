import React from 'react'
import { modifyItem } from '../../actions/actions'
import { useDispatch } from 'react-redux'

export default function ButtonUpdate(id, dataModified) {

    const dispatch = useDispatch()

    return (
        <div>
            <button
                className='btn btn-primary'
                onClick={() => dispatch(modifyItem(id, dataModified))}
            >
                Update
            </button>

        </div>
    )
}
