import React, { useState } from 'react';
import { Box } from '@mui/material'
import HeroBanner from './HeroBanner/HeroBanner';
import SearchExercises from './SearchExercises/SearchExercises';
import Exercises from './Exercises/Exercises';

export default function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}
