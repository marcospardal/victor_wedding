import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { AnimatedSection, AnimatedText } from "../components";

const ImGoing: React.FC = () => {
  return (
    <AnimatedSection>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.main",
          scrollSnapAlign: "start",
          px: { xs: 2, sm: 4, md: 6 },
          gap: "10px",
        }}
      >
        <AnimatedText color="primary" text="Confirme sua presença!" variant="h4" textAlign="center" />
        <TextField
          placeholder="Insira seu nome"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Button color="primary" variant='contained'>Ok</Button>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </AnimatedSection>
  );
};

export default ImGoing;
