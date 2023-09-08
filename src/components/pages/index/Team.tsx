import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  Container,
  Grow,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { FunctionComponent, useRef, useState } from "react";
import ReactSign from "react-sign";
import { FullVhContainer } from "../../shared/FullVhContainer";
import TeamCard from "./team/TeamCard";
interface Props {}

const Team: FunctionComponent<Props> = ({}) => {
  const [isInView, setIsInView] = useState(false);
  const scrollViewRef = useRef<HTMLDivElement>();

  const scrollRight = () => {
    if (!scrollViewRef.current) {
      return;
    }
    const correntScrollLeft = scrollViewRef.current.scrollLeft;
    const scrollWidth = scrollViewRef.current.scrollWidth;
    const clientWidth = scrollViewRef.current.clientWidth;
    const scrollTo = correntScrollLeft + clientWidth / 2;

    if (correntScrollLeft + clientWidth >= scrollWidth) {
      scrollViewRef.current.scrollLeft = 0;
    } else {
      scrollViewRef.current.scrollLeft = scrollTo;
    }
  };

  const scrollLeft = () => {
    if (!scrollViewRef.current) {
      return;
    }
    const correntScrollLeft = scrollViewRef.current.scrollLeft;
    const scrollWidth = scrollViewRef.current.scrollWidth;
    const clientWidth = scrollViewRef.current.clientWidth;
    const scrollTo = correntScrollLeft - clientWidth / 2;
    if (correntScrollLeft === 0) {
      scrollViewRef.current.scrollLeft = scrollWidth;
    } else {
      scrollViewRef.current.scrollLeft = scrollTo;
    }
  };

  return (
    <FullVhContainer sx={{ paddingBlock: "80px" }}>
      <Container>
        <Stack alignItems="center">
          <Typography variant="caption">TEAM</Typography>
          <Typography variant="h4" marginBottom="4rem">
            Sad Gorilla Team
          </Typography>
          <Box position="relative" maxWidth="100%">
            <FloatingIconButton onClick={scrollLeft}>
              <ChevronLeft />
            </FloatingIconButton>
            <FloatingIconButton sx={{ right: 0 }} onClick={scrollRight}>
              <ChevronRight />
            </FloatingIconButton>
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              ref={scrollViewRef}
              sx={{
                overflowX: "scroll",
                scrollSnapType: "x mandatory",
                "&>:not(:first-child)": { paddingLeft: "24px" },
              }}
            >
              <ReactSign
                id="reac-sign-team"
                onEnter={() => setIsInView(true)}
              />
              <Grow
                in={isInView}
                style={{ transformOrigin: "0 0 0" }}
                {...(isInView ? { timeout: 0 } : {})}
              >
                <Box>
                  <TeamCard
                    name="T. Foss"
                    role={`Creator`}
                    image="/images/monkey_2.png"
                  />
                </Box>
              </Grow>

              <Grow
                in={isInView}
                style={{ transformOrigin: "0 0 0" }}
                {...(isInView ? { timeout: 1 * 1000 } : {})}
              >
                <Box>
                  <TeamCard
                    name="Yuiila Tsurkan"
                    role={`Designer`}
                    image="/images/bfbb69a8-e33b-4c2c-8cbf-330368122a9b.jpeg"
                  />
                </Box>
              </Grow>
            </Box>
          </Box>
        </Stack>
      </Container>
    </FullVhContainer>
  );
};

const FloatingIconButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
});

export default Team;
