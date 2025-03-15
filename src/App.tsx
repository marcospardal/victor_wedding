import { Box, CssBaseline } from "@mui/material";
import { CoupleHistory, GiftList, HomePage, ImGoing, SaveTheDate } from "./pages";

function App() {
  return (
    <CssBaseline>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <HomePage />
        <CoupleHistory />
        <ImGoing />
        <GiftList />
        <SaveTheDate />
      </Box>
    </CssBaseline>
  );
}

export default App;
