import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/ToDoForm'


function App() {
  return (
    <div className="Root">
      <BrowserRouter>
      
      <Header />
      </BrowserRouter>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
