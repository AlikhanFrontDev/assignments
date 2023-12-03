import React from "react";
import styled from "styled-components";
import file1 from "../pages/files/hw1.pdf";

export default function Task1() {
  return (
    <Container>
      <h1>Unit 1 Homework</h1>
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
  height: 50vh;
  .button{
    text-align: center;
    margin-top: 100px;

  }
  .button a{
    padding: 50px 100px;
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
