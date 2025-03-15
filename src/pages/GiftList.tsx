import { Box, Skeleton } from "@mui/material";
import { AnimatedSection, AnimatedText } from "../components";

const GiftList: React.FC = () => {
  return (
    <AnimatedSection>
      <Box
        sx={{
          minHeight: "100vh",
          paddingTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          bgcolor: "background.default",
          scrollSnapAlign: "start",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <AnimatedText color="primary" text="Confira abaixo a lista de presentes dos noivos" variant="h4" textAlign="center" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 4 },
            mt: 4,
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <GiftCard key={index} />
          ))}
        </Box>
      </Box>
    </AnimatedSection>
  );
};

const GiftCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 210,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={118} />
    </Box>
  );
};

export default GiftList;
