import React from 'react'
import { Section, Work } from './style'
import work1 from '../../image/work1.png'
import work2 from '../../image/work2.png'
import work3 from '../../image/work3.png'
import { BsArrowRightShort } from 'react-icons/bs'
const Experience = () => {
  return (
      <Section>
          <h1>My Work Experience</h1>
      
      <Work>
          <h1>2015 - 2016</h1>
        <img src={work1} alt="work" />
        <h4>Junior  Designer</h4>
        <a href="#">
          Go to website <BsArrowRightShort/>
        </a>
      </Work>
      <Work>
        <h1>2017 - 2018</h1>
        <img src={work2} alt="work" />
        <h4>UI/UX Designer</h4>
        <a href="#">
          Go to website <BsArrowRightShort />
        </a>
      </Work>
      <Work>
        <h1>2019 - 2020</h1>
        <img src={work3} alt="work" />
        <h4>Product Designer</h4>
        <a href="#">
          Go to website <BsArrowRightShort />
        </a>
      </Work>
    </Section>
  )
}

export default Experience