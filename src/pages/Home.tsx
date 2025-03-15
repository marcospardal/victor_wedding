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
        }}
      >
        <AnimatedText color="primary" variant="h4" text="O Victor e a Raissa vão se casar"/>
      </Box>
    </AnimatedSection>
  );
};

export default HomePage;
