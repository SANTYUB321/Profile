import React from 'react'
import './EsperienceCards.css'
import ImageReact from '../../../assets/reactt.jpg'
import ImageJs from '../../../assets/js2.png'
import ImageMongo from '../../../assets/mongoDb.png'
import ImageJava from '../../../assets/java2.png'

export const ExperienceCards = () => {
  return (
    <section className='containerExperience'>
<div className='CardExperience'>
    <img className='ImgCardExperience' src= {ImageReact} alt="" />
    <div className='Bar1'><div className='Bar2'></div></div>
    <p>Bases</p>
    
</div>
<div className='CardExperience'>
    <img className='ImgCardExperience' src= {ImageJs} alt="" />
    <div className='Bar1'><div className='Bar2'></div></div>
    <p>Bases</p>
    
</div>
<div className='CardExperience'>
    <img className='ImgCardExperience' src= {ImageMongo} alt="" />
    <div className='Bar1'><div className='Bar2'></div></div>
    <p>Bases</p>
    
</div>
<div className='CardExperience'>
    <img className='ImgCardExperience' src= {ImageJava} alt="" />
    <div className='Bar1'><div className='Bar2'></div></div>
    <p>Bases</p>
    
</div>
    </section>
  )
}
