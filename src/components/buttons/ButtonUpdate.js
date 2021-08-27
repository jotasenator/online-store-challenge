import React from 'react'


export default function ButtonUpdate({ id }) {


    const handleModify = () => {
        alert(id)
    }

    return (
        <div>
            <button
                className='btn btn-primary'
                onClick={handleModify}
            >
                Update
            </button>

        </div>
    )
}
