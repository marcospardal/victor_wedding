import { Box } from "@mui/material";
import { AnimatedSection, AnimatedText } from "../components";

const HomePage: React.FC = () => {
  return (
    <AnimatedSection>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: 'column',
          paddingTop: "100px",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: '64px',
          bgcolor: "background.default",
          scrollSnapAlign: "start",
          px: { xs: 2, sm: 4, md: 6 },
          position: "relative",
          backgroundImage: "url('/background/rio.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: { xs: "top", md: "center 50%" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(83, 20, 20, 0.2)",
            zIndex: 1,
          },
        }}
      >
        <AnimatedText
          text="Victor & Raissa"
          variant="h1"
          textAlign="center"
          fontFamily={"Outfit"}
          color='text.secondary'
          sx={{
            typography: { xs: "h2", md: "h1" },
            fontSize: { md: '150px' },
            position: "relative",
            fontFamily: 'Outfit !important',
            zIndex: 2,
            alignSelf: 'center !important',
          }}
        />
        <AnimatedText
          text="22 | Novembro | 2025"
          variant="h1"
          textAlign="center"
          color='text.secondary'
          sx={{
            typography: { xs: "h6", md: "h2" },
            position: "relative",
            fontFamily: 'Lora !important',
            zIndex: 2,
          }}
        />
      </Box>
    </AnimatedSection>
  );
};

export default HomePage;
