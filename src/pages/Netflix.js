import React, {useState, useEffect} from 'react'

import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TopNav from '../components/TopNav'
import { fetchMovies, getGenres } from '../store/index'
import SliderComponent from '../components/SliderComponent'

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  const movies = useSelector(state => state.netflix.movies);

  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGenres())
  }, [])

  useEffect(()=>{
   if(generesLoaded){
    dispatch(fetchMovies({type:"all"}))
   }
  });

  window.onscroll=()=>{
    setIsScrolled(window.scrollY === 0 ? false : true)
    return()=>(window.onscroll = null)
  };
  //console.log(movies)
  return (
    <MovieContainer>
    <div className='movie'>
      <TopNav isScrolled={isScrolled}/>
      <img className='background-image'
       src='https://res.cloudinary.com/de9qmxjzn/image/upload/v1693435987/little_miss_sunshine_d59utv.png' alt='movie'/>
      <div className='container'>
        <div className='title'>
          <h1>Little Miss Sunshine</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='buttons'>
          <button onClick={()=>navigate('/player')} className='playBtn'>Play</button>
          <button className='moreBtn'>More</button>
        </div>
      </div>
    </div>
   <SliderComponent movies={movies}/>
    </MovieContainer>
  )
}
const MovieContainer = styled.div `
.movie{
  position: relative;
  .background-image{
    filter: brightness(40%)
  }
  img{
    height: 70vh;
    width: 100vw;
  }
  .container{
    position: absolute;
    bottom: 1rem;
    .title{
      h1{
        margin-left: 5rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(0, 0, 0));
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;
      }
      p{
        margin-bottom: 50px;
        width:640px;
        margin-left: 5rem;
        font-family: "lexed Deca", sans-serif;
        color:white
      }
    }
    .buttons{
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }
    .playBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
    .moreBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: 0.1rem solid white;
      cursor: pointer;
    }
  }
}
`
export default Netflix
