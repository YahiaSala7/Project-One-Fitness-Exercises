import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExercisesCard from "./ExercisesCard";
import { fetchData, exerciseOptions } from "../utils/fetchData";
function Exercises({ setExercises, bodyPart, exercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const numberOfPages = Math.ceil(exercises.length / exercisesPerPage);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  return (
    <Box
      mt={{ lg: "100px", xs: "50px" }}
      mb={{ lg: "100px", xs: "50px" }}
      p="20px">
      <Typography
        variant="h3"
        mb="42px"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}>
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        gap={{ lg: "100px", xs: "80px" }}
        flexWrap="wrap"
        justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}
      </Stack>

      {exercises.length > 9 && (
        <Pagination
          shape="rounded"
          count={numberOfPages}
          sx={{ display: "flex", justifyContent: "center" }}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </Box>
  );
}

export default Exercises;
