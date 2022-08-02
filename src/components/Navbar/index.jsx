import React,{useState} from 'react'
import { Header,Logo } from './style'
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from '../../image/logo.png'
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar= ()=> setSidebar(!sidebar)
  return (
    <Header>
      <Logo>
        <img src={logo} alt="" />
        <h1>Elito.</h1>
      </Logo>
          <FaBars className='menu-show' color='#fff' size={25} onClick={showSidebar} />
          {sidebar && <Sidebar active={setSidebar}/>}
    </Header>
  )
}

export default Navbar