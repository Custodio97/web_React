import React from 'react'
import { Section,Content_Box,Box } from './style'
import { MdWeb } from 'react-icons/md'
import { BsMenuApp } from 'react-icons/bs'
import { SiPaloaltosoftware } from 'react-icons/si'
const Service = () => {
    const data= [
        {
            icon:<MdWeb/>,
            title: 'Web Development',
            description:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
        },
        {
            icon: <BsMenuApp/>,
            title: 'App Development',
            description: "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
        },
        {
            icon: <SiPaloaltosoftware/>,
            title: 'App Development',
            description: "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
        },


   ]
  return (
      <Section id="services">
          <h1>Popular Services</h1>
          <p>Must explain to you how all this mistaken<br/>
              idea of denouncing pleasure born and give you a complete account the system.</p>
          <Content_Box>
            
              {data.map((data, index) => <Box key={index}>
                  <span>{data.icon}</span>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  </Box>)}
              
          </Content_Box>
    </Section>
  )
}

export default Service