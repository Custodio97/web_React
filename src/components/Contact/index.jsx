import React from 'react'
import {Section,Form,Box_Input} from './style'
const Contact = () => {
  return (
      <Section id="contact">
          <Form>
              <Box_Input>
                  <input type="text" placeholder='Name' />
                  <input type="text" placeholder='Email' />
              </Box_Input>
              <Box_Input>
                  <input style={{width:"50%"}} type="phone" placeholder='Your Phone' />
              </Box_Input>
              <Box_Input>
                  <textarea></textarea>
              </Box_Input>
              <button type='submit'>submit</button>
          </Form>
    </Section>
  )
}

export default Contact