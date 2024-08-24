import React from "react";
// import "./home.css";
import style from "./home.module.css";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      {/* <h1 className='h1'>Home Page</h1> */}
      <h1 className={style.h1}>Home Page</h1>

      <p>Welcome to the home page!</p>
      <p>This is a simple React application.</p>
      <p>Feel free to explore the other pages.</p>
      <p>
        Created by: <a href="https://www.linkedin.com/in/nouva-ss/">Nouva SS</a>
      </p>
      <Heading>hello world</Heading>
      <Paragraph>This is a styled paragraph</Paragraph>
    </div>
  );
};
const Heading = styled.h1`
  color: red;
  background-color: green;
  font-family: monospace;
`;
const Paragraph = styled.p`
color: green;
background-color:goldenrod`

export default Home;
