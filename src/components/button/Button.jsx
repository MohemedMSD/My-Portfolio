import React from 'react'
import './button.scss';
export const Button = ({children}) => {
  return (
    <button className="py-3 py-md-2 col-11 col-sm-10 col-md-7 btn-about mb-2 mb-sm-0">{children}</button>
  )
}
