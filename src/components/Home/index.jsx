import React from 'react'
import { Section, Content } from './style'
import { IoIosArrowForward } from 'react-icons/io'
import home from '../../image/home.jpg'
const Home = () => {
  return (
      <Section id='home'>
          <Content>
              <h2>
                  Hello,
              </h2>
              <h1>I Am Ronald.</h1>
              <h3>UI/UX Designer</h3>
              <p>Must explain to how all this mistaken idea denouncing pleasure pain the system and expound the actua.</p>
              <button>
                  <a href="#">
                      Hire Me 
                      
                  </a>
                  <IoIosArrowForward />
              </button>
          </Content>
          <img src={home} alt="home" />
    </Section>
  )
}

export default Home