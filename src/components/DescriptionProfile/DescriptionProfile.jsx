import React from 'react'
import './DescriptionProfile.css'
import { LogoSena2 } from '../LogoSena2/LogoSena2'


export const DescriptionProfile = () => {
  return (
    <section className='sectionM2'>
      <div className='DivProfile'>
    <LogoSena2/>  
        <h2 className='titleProfile'>PERFIL</h2>
        </div>
        <hr className='lineMain'/>
        <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </section>
  )
}
