import Box from "@mui/material/Box/Box";
import { AnimatedSection } from "../components";
import Grid2 from "@mui/material/Grid2/Grid2";
import Typography from "@mui/material/Typography/Typography";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import useGuestList from "../lib/hooks/useGuestList";

const GuestList: React.FC = () => {
  const { guests } = useGuestList();

  return (
    <CssBaseline>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <AnimatedSection>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "100px",
              bgcolor: "background.main",
              scrollSnapAlign: "start",
              px: { xs: 2, sm: 4, md: 6 },
              gap: "20px",
            }}
          >
            <Grid2 container width={"100%"} spacing={2}>
              {guests.map((e) => (
                <GridItem guest={e} />
              ))}
            </Grid2>
          </Box>
        </AnimatedSection>
      </Box>
    </CssBaseline>
  );
};

type GridItemProps = {
  guest: GuestConfirmation;
};

const GridItem: React.FC<GridItemProps> = ({ guest }) => {
  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: "10px 15px",
        justifyContent: { xs: "center", md: "flex-start" },
      }}
      padding="8px"
    >
      <Typography variant="h6" color="primary" flex={2}>
        Nome: <b>{guest.guestName}</b>
      </Typography>
      <Typography variant="h6" color="primary" flex={2}>
        Presente: <b>{guest.giftName}</b>
      </Typography>
      {guest.companions.map((c) => (
        <Typography variant="h6" color="primary" flex={2}>
          {c.type}: <b>{c.name}</b>
        </Typography>
      ))}
    </Grid2>
  );
};

export default GuestList;
