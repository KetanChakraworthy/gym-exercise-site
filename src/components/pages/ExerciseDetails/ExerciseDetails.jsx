import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { baseUrl, options, ytUrl, ytOptions, fetchData } from '../../../api/fetchData';
import Details from './Details/Details';
import ExerciseVideo from './ExerciseVideo/ExerciseVideo';
import SimilarExercise from './SimilarExercise/SimilarExercise';

export default function ExerciseDetails() {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(`${baseUrl}/exercise/${id}`, options);
      setExerciseDetails(exerciseDetailData);
      const exerciserVideosData = await fetchData(`${ytUrl}/search?query=${exerciseDetailData.name}`, ytOptions);
      setExerciseVideos(exerciserVideosData.contents); 
      const targertMuscleExercisesData = await fetchData(`${baseUrl}/target/${exerciseDetailData.target}`, options);
      setTargetMuscleExercises(targertMuscleExercisesData);
      const equipmentExercisesData = await fetchData(`${baseUrl}/equipment/${exerciseDetailData.equipment}`, options);
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]); 
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}
