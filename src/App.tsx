import React from 'react';
import './App.css';
import styled from 'styled-components';

const Title = styled.header`
    color: white;
    font-size: 2em;
    font-family: Noto Sans, sans-serif;
    font-weight: 600;
`;

function App() {
  return (
    <div className="App">
      <Title>Github API challenge</Title>
    </div>
  );
}

export default App;
