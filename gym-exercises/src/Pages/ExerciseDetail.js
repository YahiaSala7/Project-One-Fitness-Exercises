import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Details from "../Components/Details";
import ExerciseVideo from "../Components/ExerciseVideo";
import SimlarExercises from "../Components/SimlarExercises";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";
function ExerciseDetail() {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const exerciseUrlDb = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
    const fetchExerciseData = async () => {
      const fetchExerciseDetail = await fetchData(
        exerciseUrlDb,
        exerciseOptions
      );
      setExerciseDetails(fetchExerciseDetail);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideo />
      <SimlarExercises />
    </Box>
  );
}

export default ExerciseDetail;
