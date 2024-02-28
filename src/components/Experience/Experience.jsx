import React from 'react'
import { LogoSena2 } from '../LogoSena2/LogoSena2'
import './Experience.css'
import { ExperienceCards } from './ExperienceCards/ExperienceCards'

export const Experience = () => {
  return (
        <section className='sectionM2'>
      <div className='DivProfile'>
    <LogoSena2/>  
        <h2 className='titleProfile'>EXPERIENCIA</h2>
        </div>
        <ExperienceCards/>
    </section>
  )
}
