import React from 'react'

export default function ButtonUpdate() {

    const handleUpdate = () => {
        alert('Update')
    }
    return (
        <div>
            <button
                className='btn btn-primary'
                onClick={handleUpdate}
            >
                Update
            </button>

        </div>
    )
}
