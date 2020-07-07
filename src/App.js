import React from 'react';


import Header from './components/Header'
import Footer from './components/Footer'
import ToDo from './components/ToDo';

import './styles/styles.sass'


function App() {
  return (
    <div className="Root">
      <Header />
      <ToDo />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
