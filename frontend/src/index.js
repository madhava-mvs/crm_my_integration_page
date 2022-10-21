import React from 'react';
import ReactDOM from 'react-dom/client';
import AddLead from './AddLead';
// import SignUp from './signup';
// import Admin from './AdminDashboard';
// import Test from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddLead />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
