import React from 'react'
import './MyProjects.css'
import './MyProjects.css'
import { LogoSena2 } from '../LogoSena2/LogoSena2'
import { Cards } from './Cards/Cards'


export const MyProjects = () => {
  return (
        <section className='sectionM2'>
      <div className='DivProfile'>
    <LogoSena2/>  
        <h2 className='titleProfile'>PROYECTOS</h2>
        </div>
        <hr className='lineMain'/>
        <div className='containerCards'>
        <Cards/>
        </div>
    </section>
  )
}
