import { Stack, CircularProgress } from "@mui/material";
import React from "react";
function Loader() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%">
      <CircularProgress color="error" />
    </Stack>
  );
}

export default Loader;
