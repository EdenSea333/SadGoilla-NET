import { Box, Container, Grow, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import ReactSign from "react-sign";
import { FullVhContainer } from "../../shared/FullVhContainer";
import Step from "./roadmap-segment/Step";
interface Props {}

const RoadmapSegment: FunctionComponent<Props> = ({}) => {
  const [isIn, setIsIn] = useState(false);
  return (
    <FullVhContainer sx={{ paddingBlock: "80px", position: "relative" }}>
      <StyledImage
        src="/images/monkey_2.png"
        alt=""
        layout="fill"
        objectFit="cover"
        sx={{ filter: "opacity(0.2)" }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography variant="caption" marginBottom="0.75rem">
          FORWARD VISION
        </Typography>
        <Typography variant="h4" marginBottom="1rem">
          Roadmap
        </Typography>
        <ReactSign id="React-sign-roadmap" onEnter={() => setIsIn(true)} />
        <Stack>
          <Grow in={isIn} timeout={isIn ? 0 : undefined}>
            <Box>
              <Step title="- NFT development " description=" " />
            </Box>
          </Grow>
          <Grow in={isIn} timeout={isIn ? 1000 : undefined}>
            <Box>
              <Step
                title="- release of 900 unique NFTs collection for minting "
                description=" "
              />
            </Box>
          </Grow>
          <Grow in={isIn} timeout={isIn ? 2000 : undefined}>
            <Box>
              <Step
                title="- release of remaining 99 NFTs on OpenSea"
                description=" "
              />
            </Box>
          </Grow>
          <Grow in={isIn} timeout={isIn ? 3000 : undefined}>
            <Box>
              <Step
                title="- $distribution to selected foundations and organizations"
                description=" "
              />
            </Box>
          </Grow>
          <Grow in={isIn} timeout={isIn ? 4000 : undefined}>
            <Box>
              <Step
                title="- Showcase of randomly selected NFTs of the collection at physical art showings. "
                description=" "
              />
            </Box>
          </Grow>
          <Grow in={isIn} timeout={isIn ? 5000 : undefined}>
            <Box>
              <Step title="- SAD token release on uniswap" description=" " />
            </Box>
          </Grow>
        </Stack>
      </Container>
    </FullVhContainer>
  );
};

const StyledImage = styled(Image)``;

export default RoadmapSegment;
