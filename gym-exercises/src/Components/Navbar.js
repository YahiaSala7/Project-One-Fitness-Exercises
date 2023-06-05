import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/Logo.png";
function Navbar() {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-around "
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}>
          Home
        </NavLink>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
