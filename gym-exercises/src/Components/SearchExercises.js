import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "../App.css";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
function SearchExercises({ bodyPart, setExercises, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        textAlign={"center"}
        mb="50px">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          label="Search Exercises"
          height="76px"
          helperText="search for exercises"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
            },
            width: { lg: "1170px", xs: "350px" },
            bgcolor: "#fff",
          }}
          color="error"
        />
        <Button
          variant="contained"
          color="error"
          sx={{
            bgcolor: "#FF2625",
            borderRadius: 0,
            p: "15px ",
            width: { lg: "173px", xs: "80px" },
            textTransform: "none",
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
            "&:hover": { bgcolor: "#FF2625" },
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          isBodyPart={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
