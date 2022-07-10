import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from '../../../HorizontalScrollBar/HorizontalScrollBar';
import Loader from '../../../Loader/Loader'; 
export default function SimilarExercise({ equipmentExercises, targetMuscleExercises }) {

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }} >
      <Typography variant='h3' mb={5} >Exercises that target Same Muscle Group</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }} >
        {
          targetMuscleExercises.length
            ? <HorizontalScrollBar data={targetMuscleExercises} />
            : <Loader />
        }
      </Stack>
      <Typography variant='h3' mb={5} >Exercises that use Same Equipment</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }} >
        {
          equipmentExercises.length
            ? <HorizontalScrollBar data={equipmentExercises} />
            : <Loader />
        }
      </Stack>
    </Box>
  )
}
