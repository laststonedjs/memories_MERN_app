import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// material ui
import { Container } from "@material-ui/core";
// components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Routes>
        <Home />
      </Container>
    </BrowserRouter>
  )
}

export default App;