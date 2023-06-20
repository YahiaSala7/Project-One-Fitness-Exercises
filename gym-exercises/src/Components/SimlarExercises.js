import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
import HorizontalScrollbar from "./HorizontalScrollbar";
function SimlarExercises({
  simlarExerciseUrlTarget,
  simlarExerciseUrlEquipment,
}) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px">
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {simlarExerciseUrlTarget.length !== 0 ? (
          <HorizontalScrollbar data={simlarExerciseUrlTarget} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px">
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {simlarExerciseUrlEquipment.length !== 0 ? (
          <HorizontalScrollbar data={simlarExerciseUrlEquipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimlarExercises;
