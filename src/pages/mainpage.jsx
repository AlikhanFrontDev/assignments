import React from 'react'
import styled from "styled-components";
import avatar from "./avatar.jpg"
export default function Mainpage() {
  return (
    <Container>
      <img src={avatar} alt="" />
      <h1>Hasankhonov Alikhon</h1>
      <p>Student ID: 48594</p>
    </Container>
  )
}

const Container = styled.div`
background-color: #000;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 50vh;
  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
  h1{
    margin: 5px 0;
  }
`
