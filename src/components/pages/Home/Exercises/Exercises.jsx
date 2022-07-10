import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { baseUrl, options, fetchData } from '../../../../api/fetchData';
import ExerciseCard from './ExerciseCard/ExerciseCard';

export default function Exercises({ exercises, bodyPart, setExercises }) {

  const [currentPage, setCurrentPage] = useState(1);
  
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData(baseUrl, options);

      } else {
        exercisesData = await fetchData(`${baseUrl}/bodyPart/${bodyPart}`, options);
      }
      setExercises(exercisesData);
    }
    fetchExerciseData();
  }, [bodyPart, setExercises]);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, 'behavior': 'smooth' });
    
  }

  
  return (
    <Box
      id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px' >Showing Results</Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '110px', xs: '50px' } }} >
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}  />
          ) )
        }
      </Stack>
      <Stack mt='100px' alignItems='center' >
        {
          exercises.length > 9 && (
            <Pagination
              color='standard'
              shape='rounded'
              count={Math.ceil(exercises.length / 9)}
              page={currentPage}
              onChange={paginate}
            />
          )
        }
      </Stack>
    </Box>
  )
}
