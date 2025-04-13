import { Box, Typography } from "@mui/material";
import { AnimatedSection, AnimatedText } from "../components";
import { useEffect, useState } from "react";

const targetDate = "2025-11-22";

const SaveTheDate: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) return null;

    return {
      'Dias': Math.floor(difference / (1000 * 60 * 60 * 24)),
      'Horas': Math.floor((difference / (1000 * 60 * 60)) % 24),
      'Minutos': Math.floor((difference / (1000 * 60)) % 60),
      'Segundos': Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        }}
      >
        <Box display={"flex"} gap={"20px"}>
          {timeLeft &&
            Object.keys(timeLeft).map((key) => (
              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Typography alignSelf={'center'} color="primary">{timeLeft[key as keyof typeof timeLeft]}</Typography>
                <Typography color="primary">{key}</Typography>
              </Box>
            ))}
        </Box>
        <AnimatedText color="primary" text="Lembre-se do grande dia!" variant="h4" textAlign="center" />{" "}
        <AnimatedText color="primary" text="Será dia 22 de Novembro de 2025" variant="h6" textAlign="center" />
        <AnimatedText color="primary" text="No lugar lá e tal" variant="h6" textAlign="center" />
      </Box>
    </AnimatedSection>
  );
};

export default SaveTheDate;
