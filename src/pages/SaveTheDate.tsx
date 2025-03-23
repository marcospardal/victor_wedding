import { Box } from "@mui/material";
import { AnimatedSection, AnimatedText } from "../components";

const SaveTheDate: React.FC = () => {
  return (
    <AnimatedSection>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.main",
          scrollSnapAlign: "start",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <AnimatedText
          color="primary"
          text="Lembre-se do grande dia!"
          variant='h4'
          textAlign="center"
        />
        <AnimatedText
          color="primary"
          text="Será dia 22 de Novembro de 2025"
          variant='h6'
          textAlign="center"
        />
        <AnimatedText
          color="primary"
          text="No lugar lá e tal"
          variant='h6'
          textAlign="center"
        />
      </Box>
    </AnimatedSection>
  );
};

export default SaveTheDate;
