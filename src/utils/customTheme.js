import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    success: {
      main: green[600]
    },
    info:{
      main: grey[700],
    }
  }
})