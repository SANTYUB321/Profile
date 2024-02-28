import React from 'react'
import MiFoto from '../../assets/Santy.jpg'
import './MiProfile.css'

export const MiProfile = ({children}) => {
  return (
    <section className='MiProfile'>
<img src={MiFoto} alt="logo" className='MiFoto' />

<h2 className='name'>SANTIAGO URIBE BOHORQUEZ</h2>
<hr className='lineProfile'/>
    </section>
  )
}
 