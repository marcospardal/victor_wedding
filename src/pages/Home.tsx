import { Box } from "@mui/material";
import { AnimatedSection, AnimatedText } from "../components";

const HomePage: React.FC = () => {
  return (
    <AnimatedSection>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.main",
          scrollSnapAlign: "start",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <AnimatedText
          color="primary"
          text="O Victor e a Raissa vão se casar"
          variant='h4'
          textAlign="center"
        />
      </Box>
    </AnimatedSection>
  );
};

export default HomePage;
