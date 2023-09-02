import React from 'react'
import './loading.scss';
export const Loading = ({loaded}) => {
  return (
    <div className='loading d-flex justify-content-center align-items-center'>
        <div className="lds-roller">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
        </div>
    </div>
  )
}
