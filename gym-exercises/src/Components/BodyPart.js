import { Stack, Typography } from "@mui/material";
import React from "react";
import icon from "../assets/icons/gym.png";
function BodyPart({ item, bodyPart, setBodyPart, numberOfSlides }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "3px solid #FF2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: { lg: "270px", md: "220px", sm: "180px", xs: "130px" },
        height: { lg: "282px", md: "220px", sm: "180px", xs: "130px" },
        cursor: "pointer",
        gap: "47px",
        margin: numberOfSlides === 1 ? "auto" : "",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
      }}>
      <img
        src={icon}
        alt="bodyPartIcon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        sx={{ fontSize: { lg: "24px", md: "20px", sm: "18px" } }}
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize">
        {" "}
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
