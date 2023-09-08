import { Box, Button, Grow, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { default as React, FunctionComponent, useState } from "react";
import ReactSign from "react-sign";
interface Props {}

const BigBanner: FunctionComponent<Props> = ({}) => {
  const [isIn, setIsIn] = useState(false);
  return (
    <Box
      width="100%"
      minHeight="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        position="relative"
        alignItems={"center"}
        width="100%"
        minHeight="100vh"
      >
        <Toolbar />
        <Box
          marginBottom="2rem"
          borderRadius="20px"
          boxShadow="#e2e7eb91 0px 0px 10px"
          overflow="hidden"
          width="300px"
          height="300px"
          position="relative"
        >
          <Image
            src="/images/Untitled-1.gif"
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </Box>
        <ReactSign id="react-sign-big-banner" onEnter={() => setIsIn(true)} />
        <Grow in={isIn} timeout={isIn ? 1000 : undefined}>
          <Stack flex={1} alignItems="center" justifyContent="center">
            <Typography variant="h3" marginBottom="1rem">
              Sad Gorilla
            </Typography>
            <Typography marginBottom="2rem">
              A GANG OF Sad Gorilla NFTs
            </Typography>
            <Link href="/mint">
              <a>
                <Button
                  variant="contained"
                  sx={{
                    marginBottom: "2rem",
                    paddingInline: "4rem",
                    boxShadow: "#e2e7eb91 0px 0px 22px",
                  }}
                  size="large"
                >
                  MiNT NOW
                </Button>
              </a>
            </Link>
          </Stack>
        </Grow>
        <Box position="relative" minHeight="300px" width="100%">
          <Image
            src="/images/gorilla_bord_.png"
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default BigBanner;
