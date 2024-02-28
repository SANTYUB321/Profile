import React from 'react'
import { NavBar } from '../../NavBar/NavBar'
import { Item } from '../../Item/Item'
import { Main } from '../../Layouts/Main/Main'
import { SideBar } from '../../Layouts/SideBar/SideBar'
import { DescriptionProfile } from '../../DescriptionProfile/DescriptionProfile'
import { MiProfile } from '../../MiProfile/MiProfile'
import { SenaLogo } from '../../LogoSena/LogoSena'
import { MyProjects } from '../../MyProjects/MyProjects'
import { References } from '../../References/References'
import { Experience } from '../../Experience/Experience'
import { SectionIcons } from '../../SectionIcons/SectionIcons'
import { ButtonFloating } from '../../ButtonFloating/ButtonFloating'




export const Home = () => {
  return (
    <>
    <SideBar>
        <MiProfile/>
        <NavBar>
          <Item content='Inicio' />
          <Item content='Perfil' />
          <Item content='Proyectos' />
          <Item content='Referencia' />
          <Item content='Experiencia' />
        </NavBar>    
        <SenaLogo/>  
        <SectionIcons/>
    </SideBar>
    
    <Main>
      <DescriptionProfile/>
      <MyProjects/>
      <References/>
      <Experience/>
      
    </Main>
    <ButtonFloating/>
    </>  )
}
