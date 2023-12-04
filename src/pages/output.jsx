import React from 'react'
import img1 from "../pages/files/download1.png"
import img2 from "../pages/files/download2.png"
import img3 from "../pages/files/images1.png"
import styled from 'styled-components'

export default function Output() {
  return (
    <Container>
        <img src={img2} alt="" />
        <img src={img1} alt="" />
        <img src={img3} alt="" />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 50px 0;
    img{
        width: 420px;
        object-fit: cover;

    }
`