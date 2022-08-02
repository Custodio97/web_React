import React from 'react'
import { Container,Content } from './style'
import { FaTimes, FaHome } from 'react-icons/fa'
import { FcAbout, FcServices } from 'react-icons/fc'
import { SiCdprojekt } from 'react-icons/si'
import { FcContacts } from 'react-icons/fc'
import { FaBlogger } from 'react-icons/fa'
import SidebarItems from '../SidebarItems'
const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
  return (
      <Container sidebar={active}>
          <FaTimes className='close-sidebar' size={25} color="#fff" onClick={closeSidebar} />
          <Content>
              <SidebarItems Icon={FaHome} Title="Home" href="#home" />
              <SidebarItems Icon={FcAbout} Title="About" href="#about" />
              <SidebarItems Icon={FcServices} Title="Services" href="#services" />
              <SidebarItems Icon={SiCdprojekt} Title="Project" href="#project" />
              <SidebarItems Icon={FcContacts} Title="Contatcs" href="#contact" />
        
          </Content>
    </Container>
  )
}

export default Sidebar