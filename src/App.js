import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
    font-family: 'Open Sans', sans-serif;
    margin:0;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Great Vibes', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </>
  );
}

export default App;
