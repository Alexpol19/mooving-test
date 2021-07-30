import React from 'react';
import Home from './screens/Home'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const App = () => {
  return (
    <>
      <ReactNotification />
      <Home />
    </>
  );
}

export default App;
