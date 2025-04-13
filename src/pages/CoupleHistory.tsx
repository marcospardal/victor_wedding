import {
  Box,
  Button,
  DialogActions,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatedSection } from "../components";
import React, { PropsWithChildren, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const coupleHistoryParagraphs = [
  "Há quatro anos, nossos caminhos se cruzaram e, desde então, nunca mais se separaram.",
  "O que começou com um encontro inesperado logo se transformou em uma conexão profunda, cheia de amor, cumplicidade e sonhos compartilhados.",
  "Cada dia ao lado um do outro trouxe novas memórias, desafios superados juntos e incontáveis momentos de felicidade.",
  "Com o passar do tempo, tivemos certeza de que havíamos encontrado no outro o nosso lar.",
  "Entre risadas, viagens, planos e até as pequenas rotinas do dia a dia, percebemos que a vida é muito mais bonita quando estamos juntos.",
  "Agora, chegou a hora de dar o próximo passo nessa jornada e celebrar o amor que nos trouxe até aqui.",
  "Em breve, diante de nossas famílias e amigos, diremos “sim” para uma nova fase, com a certeza de que essa história, que já é tão linda, está apenas começando.",
  "Estamos ansiosos para compartilhar esse momento especial com vocês!",
];

const CoupleHistory: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    if (currentSlide < coupleHistoryParagraphs.length - 1) {
      setDirection("next");
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setDirection("prev");
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: "next" | "prev") => ({
      x: direction === "next" ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <AnimatedSection animationKey="slideFromLeft">
      <HistoryBlock>
        <Typography
          sx={{
            fontSize: {
              md: "66px",
              xs: "40px",
            },
            color: 'rgb(243, 227, 194)'
          }}
          variant="h4"
          fontFamily={"Playfair Display"}
          color="text.primary"
          fontWeight={"bold"}
          alignSelf={"flex-start"}
        >
          Nossa História
        </Typography>

        <Box
          sx={{
            width: "100%",
            marginTop: {
              xs: "60px",
              md: "20px",
            },
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
            borderRadius: 4,
            padding: {
              md: "64px",
              xs: "64px 20px 24px 20px",
            },
            background: "rgb(243, 227, 194)",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ position: "relative", minHeight: "140px" }}>
            {isMobile ? (
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ position: "relative" }}
                >
                  <Typography
                    sx={{
                      fontSize: "21px",
                      fontFamily: "Playfair Display !important",
                    }}
                    color="primary.main"
                  >
                    {coupleHistoryParagraphs[currentSlide]}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            ) : (
              <Typography
                sx={{
                  fontSize: "21px",
                  fontFamily: "Playfair Display !important",
                  fontWeight: 600
                }}
                color="primary.main"
              >
                {coupleHistoryParagraphs.join(" ")}
              </Typography>
            )}
          </Box>

          {isMobile && (
            <DialogActions
              sx={{
                justifyContent: "space-between",
                padding: "8px 0 0",
              }}
            >
              <Button onClick={handleBack} disabled={currentSlide === 0}>
                <ArrowBack />
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentSlide === coupleHistoryParagraphs.length - 1}
              >
                <ArrowForward />
              </Button>
            </DialogActions>
          )}
        </Box>
      </HistoryBlock>
    </AnimatedSection>
  );
};

const HistoryBlock: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "primary.main",
        justifyContent: "center",
        scrollSnapAlign: "start",
        padding: {
          xs: "20px",
          md: "50px 200px",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default CoupleHistory;
