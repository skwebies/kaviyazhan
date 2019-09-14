import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
    font-family: 'Open Sans', sans-serif;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Great Vibes', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Kaviyazhan</h1>
        <p>Tamil Lyricist</p>
      </div>
    </>
  );
}

export default App;
