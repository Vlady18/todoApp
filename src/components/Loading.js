import React from 'react'

export const Loading = () =>{
    return(
        <div className='loading_wrap'>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}