import React from 'react'
import {Container} from './style'
const SidebarItems = ({Icon,Title,href}) => {
  return (
      <Container>
          <Icon />
          <a href={href}>
              {Title}
          </a>
    </Container>
  )
}

export default SidebarItems