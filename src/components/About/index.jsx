import React from 'react'
import {
    Section,
    Content,
    Experience,
    Rect,
    Gruop_Box,
    Box,
    Content_Box,
} from './style'
const About = () => {
  return (
      <Section id="about">
          <Content>
              <Experience>
                  <h1>08</h1>
                  <h3>Years of Experience</h3>
                  <Rect>
                      <h1>100%</h1>
                      <p>Clients<br></br>
                          Satisfections</p>
                  </Rect>
              </Experience>
            
              
          </Content>
          <Content_Box>
              <h2>My Advantage</h2>
              <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account the system and expound the actual and praising pain was born.</p>
              <Gruop_Box>


                  <Box className='figma'>
                      <h2>98%</h2>
                      <h4>Figma</h4>
                  </Box>
                  
                  <Box className='illustrator'>
                      <h2>72%</h2>
                      <h4>Illustrator</h4>
                  </Box>
                  <Box className='wordpress'>
                      <h2>43%</h2>
                      <h4>WordPress</h4>
                  </Box>
                  <Box className='react'>
                      <h2>37%</h2>
                      <h4>ReactJS</h4>
                  </Box>
              </Gruop_Box>
          </Content_Box>
          
    </Section>
  )
}

export default About