import React from 'react'

export default function ButtonDelete() {

    const handleDelete = () => {
        alert('Delete')
    }
    return (
        <div>
            <button
                className='btn btn-danger'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
