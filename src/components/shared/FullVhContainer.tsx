import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const FullVhContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  placeItems: "center",
  display: "flex",
}));
