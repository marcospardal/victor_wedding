import { Box } from "@mui/material";
import { AnimatedSection, AnimatedText } from "../components";

const CoupleHistory: React.FC = () => {
  return (
    <AnimatedSection animationKey="slideFromLeft">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          scrollSnapAlign: "start",
        }}
      >
        <AnimatedText variant="h5" color='primary' text='Prepare-se para o grande momento'/>
      </Box>
    </AnimatedSection>
  );
};

export default CoupleHistory;
