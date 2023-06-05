import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImg from "../assets/imgs/banner.png";
function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="10px">
      <Typography color="#FF2625" fontWeight={550} fontSize={26}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        fontSize={40}
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        mb="20px"
        mt="30px">
        Sweat,Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="20px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        variant="contained"
        href="#exerciese"
        color="error"
        sx={{
          bgcolor: "#FF2625",
          marginTop: "45px",
          p: "15px",
          textTransform: "none",
          "&:hover": { bgcolor: "#FF2625" },
        }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}>
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
