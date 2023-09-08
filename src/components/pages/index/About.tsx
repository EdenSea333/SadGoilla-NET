import {
  Box,
  Container,
  Fade,
  Grow,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import ReactSign from "react-sign";
import { FullVhContainer } from "../../shared/FullVhContainer";
interface Props {}

const About: FunctionComponent<Props> = ({}) => {
  const [isIn, setIsIn] = useState(false);
  return (
    <FullVhContainer>
      <Container sx={{ paddingBlock: "40px" }}>
        <ReactSign
          id="React-sign-about"
          onEnter={() => setIsIn(true)}
          threshold={0.5}
        >
          <Wrapper>
            <Grow in={isIn}>
              <Stack justifyContent="center">
                <Typography variant="caption" marginBottom="1rem">
                  ABOUT
                </Typography>
                <Typography variant="h4" marginBottom="1.5rem">
                  Welcome to the minting website for SadGorilla.
                </Typography>
                <Typography marginBottom="1.5rem">
                  SadGorilla is a NFT project with an humanitarian focus and 30%
                  of the sales volume will be distributed between various
                  foundations like LoveUganda, MFT and others focused on
                  indentured animals and improving clean water access to rural
                  communities in Uganda.
                </Typography>
              </Stack>
            </Grow>
            <Fade in={isIn}>
              <Box
                position="relative"
                width="100%"
                height="100%"
                borderRadius="30px"
                overflow="hidden"
                sx={{ aspectRatio: "5/3" }}
              >
                <Image
                  src="/images/hands.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Fade>
          </Wrapper>
        </ReactSign>
      </Container>
    </FullVhContainer>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    "&>*": {
      alignItems: "center",
      textAlign: "center",
    },
  },
}));

export default About;
