import React from 'react'

import './Card.css'

export const Card = ({title,imageSorce,url}) => {
  return (
    <section className='containerCard'>
        <div className='divImgProjects'><img src={imageSorce} alt="" className='imgProjects'/></div>
        <div className='divInfo'>
        <h3>{title}</h3>
        <p className='description'>Descripcion</p>
        <a href={url} target='_blank'>Ir a Proyecto</a>
        </div>
    </section>
  )
}

