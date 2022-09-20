import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Form from './formfield';
import App from './App';
// import Task1 from './task1';
// import Content from './week1 project/content';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
{/* <Content/> */}
{/* <Form/> */}

{/* <Task1 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
