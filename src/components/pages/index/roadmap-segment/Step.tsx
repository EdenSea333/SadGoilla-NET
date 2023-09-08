import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import { Box, Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
interface Props {
  title: string;
  description: string | JSX.Element;
  completed?: boolean;
  nextStepCompleted?: boolean;
}

const Step: FunctionComponent<Props> = ({
  title,
  description,
  completed,
  nextStepCompleted,
}) => {
  return (
    <Box
      className="RoadmapStep"
      display="grid"
      gridTemplateColumns="1fr 12px minmax(auto,100%)"
      gap="16px"
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{ placeItems: "center" }}
      >
        <Typography variant="caption" sx={{ opacity: completed ? 1 : 0 }}>
          COMPLETED
        </Typography>
      </Box>
      <Stack alignItems="center">
        <Box
          width="1px"
          bgcolor={completed ? "white" : "#919eab3d"}
          flex={1}
          display="flex"
        />
        {completed ? (
          <Box
            bgcolor="white"
            padding="4px"
            borderRadius="50%"
            sx={{ aspectRatio: "1", marginBlock: "12px" }}
          >
            <CheckCircleOutlineSharpIcon
              sx={{ width: "unset", height: "unset" }}
            />
          </Box>
        ) : (
          <Box
            width="12px"
            height="12px"
            borderRadius="50%"
            border="1px solid #919eab3d"
            sx={{ marginBlock: "12px" }}
          />
        )}
        <Box
          width="1px"
          bgcolor={nextStepCompleted ? "white" : "#919eab3d"}
          flex={1}
          display="flex"
        />
      </Stack>
      <Stack sx={{ paddingBlock: "12px" }}>
        <Typography fontWeight="900" marginBottom="1rem">
          {title}
        </Typography>
        {typeof description === "string" ? (
          <Typography>{description}</Typography>
        ) : (
          description
        )}
      </Stack>
    </Box>
  );
};

export default Step;
