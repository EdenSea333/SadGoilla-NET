import { Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <Stack alignItems="center" py="5rem">
      <Typography variant="h5" fontWeight="900" marginBottom="0.5rem">
        Sad Gorilla
      </Typography>
      <Typography variant="body2">© Sad Gorilla 2022</Typography>
    </Stack>
  );
};

export default Footer;
