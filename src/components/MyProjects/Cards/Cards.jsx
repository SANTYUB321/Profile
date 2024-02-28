import React from 'react'
import image1 from '../../../assets/img1.png'
import image2 from '../../../assets/img2.png'
import image3 from '../../../assets/img3.png'
import { Card } from '../Card/Card'

const cards = [
{
    id:1,
    title:'Apptastico',
    image: image1,
    url:'https://apptastico-35505b.netlify.app'
},
{
    id:2,
    title:'Bleus',
    image: image3,
    url:'https://bleussanty.netlify.app'
},
{
    id:3,
    title:'KTN',
    image:image2,
    url:'https://verdant-froyo-a04d85.netlify.app'
}
]

export const Cards = () => {
  return (
    cards.map(card =>(
        <div key={card.id}>
            <Card title={card.title} imageSorce={card.image} url={card.url} />
        </div>
    )

  )
    
  )
}
