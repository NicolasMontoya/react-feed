import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BackButton, LoadingButton } from './components/Buttons';
import reportWebVitals from './reportWebVitals';

const Title = styled.div`
  font-size: 10px;
`;

ReactDOM.render(
  <React.StrictMode>
    <LoadingButton></LoadingButton>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
