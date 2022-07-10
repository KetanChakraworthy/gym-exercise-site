import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/pages/Home/Home';
import ExerciseDetails from './components/pages/ExerciseDetails/ExerciseDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <Box width='400px' m='auto' sx={{ width: { xl: '1488px' } }} >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={ <ExerciseDetails /> } />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
