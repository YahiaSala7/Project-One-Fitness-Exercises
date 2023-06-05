import { Box, Button, Stack, Typography } from "@mui/material";
import React, { lazy } from "react";
import targetImge from "../assets/icons/target.png";
import equipmenttImge from "../assets/icons/equipment.png";
import bodyPartImge from "../assets/icons/body-part.png";

function Details({ exerciseDetails }) {
  const { bodyPart, equipment, gifUrl, id, name, target } = exerciseDetails;
  const extraDetail = [
    {
      icon: bodyPartImge,
      name: bodyPart,
    },
    {
      icon: targetImge,
      name: target,
    },
    {
      icon: equipmenttImge,
      name: equipment,
    },
  ];
  return (
    <Stack
      flexDirection={{ lg: "row" }}
      p="20px"
      mt="50px"
      mb="50px"
      gap={{ lg: "50px", xs: "30px" }}
      justifyContent="space-around"
      alignItems="center">
      <Stack
        sx={{
          borderBottom: "4px solid #FF2625",
        }}
        justifyContent="center">
        <img src={gifUrl} alt={name} loading={lazy} className="detail-image" />
      </Stack>
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { lg: "64px", xs: "30px" },
            textAlign: { lg: "start", xs: "center" },
          }}
          fontWeight={700}
          textTransform="capitalize">
          {name}
        </Typography>
        <Typography
          m="40px 0"
          sx={{
            fontSize: { lg: "24px", xs: "18px" },
            textAlign: { lg: "start", xs: "center" },
          }}
          color="#4F4C4C">
          Exercises keep you strong. {name} bup is one of the best <br />{" "}
          exercises to target your {target}. It will help you improve your{" "}
          <br /> mood and gain energy.
        </Typography>
        <Stack>
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              alignItems="center"
              gap="15px">
              <Button
                sx={{
                  bgcolor: "#FFF2DB",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  mb: "20px",
                }}
                alignItems="center">
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "40px", height: "40px" }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "30px", xs: "20px" } }}>
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Details;
