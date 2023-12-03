import React from "react";
import styled from "styled-components";
import file1 from "../pages/files/hw1.pdf";
import A from "../pages/files/A.bmp";
import B from "../pages/files/B.bmp";
import C from "../pages/files/C.bmp";
import E from "../pages/files/E.jpg";

export default function Task1() {
  return (
    <Container>
      <h1>Unit 1 Homework</h1>
      <div className="images">
        <img src={A} alt="" />
        <img src={B} alt="" />
        <img src={C} alt="" />
        <img src={E} alt="" />
      </div>
      <div className="button">
        <a href={file1} target="_blank">
          Download PDF file
        </a>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: #00000080;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .images{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  img{
    width: 300px;
  }
  .button{
    text-align: center;
    /* padding: 50px 100px; */
  }
  .button a{
    padding: 25px 50px;
    border-radius: 12px;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    font-size: 20px;
  }
  h1 {
    text-align: center;
    padding: 20px 0;
  }
`;
