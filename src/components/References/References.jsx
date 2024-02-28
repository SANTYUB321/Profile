import React from 'react'
import { LogoSena2 } from '../LogoSena2/LogoSena2'
import './References.css'
import { ReferenceCard } from './RefereceCard/ReferenceCard'


export const References = () => {
  return (
            <section className='sectionM2'>
      <div className='DivProfile'>
    <LogoSena2/>  
        <h2 className='titleProfile'>REFERECIAS</h2>
        </div>
        <hr className='lineMain'/>
        <div className='containerRefeces'>
        </div>
        <div className='containerCards'>
        <ReferenceCard/>
        </div>
    </section>
  )
}
