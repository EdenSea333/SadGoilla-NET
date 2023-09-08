import { Box, styled } from "@mui/material";

export const SvgContainer = styled(Box)(
  ({ size = 1.5, color = "white" }: { size?: number; color?: string }) => ({
    color: color ?? "white",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      padding: `${((size * 16) / 10).toFixed(0)}px`,
      height: `${size}rem`,
      width: `${size}rem`,
      color: color,
    },
  })
);
