import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";
interface Props {
  name: string;
  role: string;
  image: string;
}

const TeamCard: FunctionComponent<Props> = ({ name, role, image }) => {
  return (
    <Stack
      width="252px"
      height="334px"
      alignItems="center"
      padding="8px"
      paddingTop="24px"
      sx={{
        borderRadius: "16px",
        scrollSnapAlign: "start",
        backgroundColor: "#212b36",
        boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
      }}
    >
      <Typography marginBottom="0.3rem" fontWeight={"900"}>
        {name}
      </Typography>
      <Typography marginBottom="0.7rem">{role}</Typography>
      <Box
        width="236px"
        height="236px"
        borderRadius="10px"
        overflow="hidden"
        position="relative"
        zIndex={0}
      >
        <Image src={image} alt={name} layout="fill" />
      </Box>
    </Stack>
  );
};

export default TeamCard;
