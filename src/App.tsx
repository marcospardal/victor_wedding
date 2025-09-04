import { Box, CssBaseline } from "@mui/material";
import { GiftList, GuestManual, ImGoing } from "./pages";

function App() {
  return (
    <CssBaseline>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <ImGoing />
        <GiftList />
        <GuestManual />
      </Box>
    </CssBaseline>
  );
}

export default App;
