import { Box, CssBaseline } from "@mui/material";
import { HomePage } from "./pages";
import CoupleHistory from "./pages/CoupleHistory";

function App() {
  return (
    <CssBaseline>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory"
        }}
      >
        <HomePage />
        <CoupleHistory />
      </Box>
    </CssBaseline>
  );
}

export default App;
