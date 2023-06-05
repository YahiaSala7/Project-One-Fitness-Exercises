import { Box, Button, Stack, Typography } from "@mui/material";
import React, { lazy } from "react";
import { Link } from "react-router-dom";

function ExercisesCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading={lazy} />
      <Stack direction={"row"} flexWrap="wrap" gap="10px">
        <Button
          variant="contained"
          color="error"
          sx={{
            textTransform: "capitalize",
            p: "5px",
            borderRadius: "12px",
            ml: "21px",
            fontSize: "14px",
          }}>
          {exercise.bodyPart}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{
            textTransform: "capitalize",
            p: "5px",
            borderRadius: "12px",
            ml: "21px",
            fontSize: "14px",
          }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        variant="h6"
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExercisesCard;
