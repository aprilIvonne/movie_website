import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const PlayerPage = () => {
  const navigate = useNavigate()
  return (
    <PlayContainer>
      <div className='player'>
        <div className='backArrow'>
      <BsArrowLeft onClick={()=>navigate(-1)}/>
      </div>
      <video src='https://res.cloudinary.com/de9qmxjzn/video/upload/v1693860403/Ver_The_End_of_the_Tour_2015_Online_Latino_HD_-_Pelisplus_-_Google_Chrome_2023-07-08_16-09-02_rujy0e.mp4' autoPlay loop controls muted/>
      
      </div>
    </PlayContainer>

  )
}
const PlayContainer =styled.div`
.player{
  width: 100vw;
  height: 100vh;
  .backArrow{
    position: absolute;
    padding: 2rem;
    z-index: 1;
    svg{
      font-size: 3rem;
      cursor: pointer;
      color: white;
    }
  }
  video{
    height: 100%;
    width: 100%;
  }
}
`
export default PlayerPage
