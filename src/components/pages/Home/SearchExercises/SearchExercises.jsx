import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { baseUrl, options, fetchData } from '../../../../api/fetchData';
import SearchForm from './SearchForm/SearchForm';
import HorizontalScrollBar from '../../../HorizontalScrollBar/HorizontalScrollBar';


export default function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  // States
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // Use Effects
  useEffect(() => {
    async function fetchExerciseData() {
      const bodyPartData = await fetchData(`${baseUrl}/bodyPartList`, options);
      setBodyParts(['all', ...bodyPartData]);
    }
    fetchExerciseData();
  },[])

  // Handle Functions
  const handleOnChange = (e) => { setSearch(e.target.value.toLowerCase()) };

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(baseUrl, options);
      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search) 
      );
      setSearch('');
      setExercises(searchExercises);
    }
  }
  
  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px' >
      <Typography
        fontWeight={700}
        mb='50px'
        textAlign='center'
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <SearchForm search={search} handleSearch={handleSearch} handleOnChange={handleOnChange} />
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }} >
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true} />
      </Box>
    </Stack>
  )
}
