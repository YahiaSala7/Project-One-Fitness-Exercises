import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Details from "../Components/Details";
import ExerciseVideo from "../Components/ExerciseVideo";
import SimlarExercises from "../Components/SimlarExercises";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
function ExerciseDetail() {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exercisesYoutubeVideos, setExercisesYoutubeVideos] = useState([]);
  const [simlarExercisesTarget, setSimlarExercisesTarget] = useState([]);
  const [simlarExercisesEquipment, setSimlarExercisesEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const exerciseUrlDb = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";
    console.log(exerciseUrlDb);
    //id
    const fetchExerciseData = async () => {
      const fetchExerciseDetail = await fetchData(
        exerciseUrlDb,
        exerciseOptions
      );
      setExerciseDetails(fetchExerciseDetail);

      //Target
      const simlarExerciseUrlTarget = `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetails.target}`;
      const smilarFetchExerciseTarget = await fetchData(
        simlarExerciseUrlTarget,
        exerciseOptions
      );
      setSimlarExercisesTarget(smilarFetchExerciseTarget);
      //Equipment
      const simlarExerciseUrlEquipment = `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetails.target}`;
      const smilarFetchExerciseEquipment = await fetchData(
        simlarExerciseUrlEquipment,
        exerciseOptions
      );
      setSimlarExercisesEquipment(smilarFetchExerciseEquipment);

      const youtubeSearchUr = `${youtubeSearchUrl}/search?query=${fetchExerciseDetail.name}`;
      const fetchExerciseVideos = await fetchData(
        youtubeSearchUr,
        youtubeOptions
      );
      setExercisesYoutubeVideos(fetchExerciseVideos.contents);
    };
    fetchExerciseData();
  }, [id]);
  // console.log(simlarExercisesTarget);

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideo
        exercisesYoutubeVideos={exercisesYoutubeVideos}
        name={exerciseDetails.name}
      />
      {/* <SimlarExercises
        simlarExerciseUrlTarget={simlarExercisesTarget}
        simlarExerciseUrlEquipment={simlarExercisesEquipment}
      /> */}
    </Box>
  );
}

export default ExerciseDetail;
