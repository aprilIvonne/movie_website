import React from 'react';
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
        <img src='https://res.cloudinary.com/de9qmxjzn/image/upload/v1693099141/Netflix-Background-prueba-1_tzhgog.jpg' alt='no internet connection'/>
    </BackgroundContainer>
  )
}
const BackgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;
    img{
        height: 100vh;
        width: 100vw;
    }
`
export default BackgroundImage
