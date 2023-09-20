import React from 'react'
import  './comptes.scss'
export const Comptes = ({SocialMedia}) => {
  return (
    <div className="side_comptes d-none d-xl-flex flex-column">
        {SocialMedia?.map((item, index) => (
          <div key={index} className="compte d-flex justify-content-center align-items-center">
            <a target="_blank" href={item.lien}>
              <i className={`fa-brands ${item.icon}`}></i>
            </a>
          </div>
        ))}
      </div>
  )
}
