import React from 'react'
import port1 from '../../image/portfoli1.jpg'
import port2 from '../../image/portifo2.jpg'
import port3 from '../../image/portifo3.jpg'
import {Section,Container,Content,Text} from './style'
const Project = () => {
    
  return (
      <Section id="project">
          <Text>
              <h1>Recent Work.</h1>
              <p>Must explain to you how
                  all this mistaken idea</p>
         </Text>
          <Container>
              <Content>
                  <img src={port1} alt="" />
              </Content>
              <Content>
                  <img src={port2} alt="" />
              </Content>
              <Content>
                  <img src={port3} alt="" />
              </Content>
          </Container>
    </Section>
  )
}

export default Project