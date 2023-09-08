import {
  Box,
  Button,
  Container,
  Grow,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import ReactSign from "react-sign";
import { FullVhContainer } from "../../shared/FullVhContainer";
import { SvgContainer } from "../../shared/SvgContainer";
import Discord from "/public/images/discord.svg";
interface Props {}

const FAQ: FunctionComponent<Props> = ({}) => {
  const [isInView, setIsInView] = React.useState(false);
  return (
    <FullVhContainer minHeight="100% !important" py="80px">
      <Container>
        <ReactSign id="React-sign-FAQ" onEnter={() => setIsInView(true)} />
        <Stack alignItems="center">
          <Grow in={isInView}>
            <Stack alignItems="center">
              <Typography marginBottom="1.5rem" variant="h5">
                Join The Discord Family
              </Typography>
              <Link href="https://discord.gg/SadGorillanft">
                <a>
                  <Button
                    variant="outlined"
                    endIcon={
                      <SvgContainer>
                        <Discord />
                      </SvgContainer>
                    }
                  >
                    Discord
                  </Button>
                </a>
              </Link>
            </Stack>
          </Grow>
        </Stack>
      </Container>
    </FullVhContainer>
  );
};

const TopSegment = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 5rem;
`;

export default FAQ;
