import { Box, CssBaseline } from "@mui/material";
import { GiftList, GuestManual, HomePage, ImGoing } from "./pages";

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
        <ImGoing />
        <GiftList />
        <GuestManual />
      </Box>
    </CssBaseline>
  );
}

export default App;
