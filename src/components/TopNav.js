import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { firebaseAuth } from '../utils/firebase-config'

import { onAuthStateChanged, signOut } from 'firebase/auth';

const TopNav = () => {
    const navLinks = [
        {name: "Home", Link: "/"},
        {name: "Tv Show", Link: "/tv"},
        {name: "My List", Link: "/mylist"},
        {name: "Movie", Link: "/movie"}
    ]

    const navigate = useNavigate()
    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(!currentUser) navigate("/login")
      })
  
  return (
    <NavContainer>
      <nav>
        <div className='leftSide'>
            <div className='logo'>
                <img src='https://res.cloudinary.com/de9qmxjzn/image/upload/v1693103684/netflix-logo_eyqooe.png' alt='logo'/>
            </div>
            <ul className='links'>
                {
                    navLinks.map(({name, Link})=>{
                        return(
                            <li key={name}>
                                <a href={Link}>{name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='rightSide'>
                <button onClick={()=>signOut(firebaseAuth)}>
                    <AiOutlineLogout />
                </button>
        </div>
        </nav>
    </NavContainer>
  )
}
const NavContainer = styled.div`
 .notScroll{
  display: flex;
 }
 .Scrolled{
  display: flex;
  background-color: black;
 }
 nav{
  position: sticky;
  top: 0;
  height: 6rem;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  padding: 1rem;
  align-items: center;
  transition: 0.3s ease-in-out;
  .leftSide{
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 5rem;
  
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 10rem;
    height: 2rem;
  }
 }
 .links{
  display: flex;
  list-style-type: none;
  gap:  3rem;
  li{
    a{
      color: white;
      text-decoration: none;
    }
  }
 }
}
 .rightSide{
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
  button{
    background-color: red;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    margin-left: 116rem;
  }&:focus{
    outline: none;
  }svg{
    color: white;
    font-size: 2rem;
  }
 }
`;


export default TopNav
