import React from 'react'

export default function ButtonCreate() {

    const handleCreate = () => {
        alert('Create')
    }
    return (
        <div>
            <button
                className='btn btn-success float-right'
                onClick={handleCreate}
            >
                Create
            </button>
        </div>
    )
}
