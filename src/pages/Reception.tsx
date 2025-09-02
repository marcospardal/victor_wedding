import { Box, styled } from "@mui/material";
import { AnimatedText } from "../components";
import Polaroid from "../components/Polaroid";

import PolaroidOne from "/images/polaroid_1.jpeg";
import PolaroidTwo from "/images/polaroid_2.jpeg";
import PolaroidThree from "/images/polaroid_3.jpeg";

const ReceptionInfo: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "127px",
          gap: "10px",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Polaroid sx={{ transform: "rotate(15deg)", zIndex: 2, width: "auto" }}>
          <CouplePicture src={PolaroidOne} />
        </Polaroid>
        <Polaroid sx={{ transform: "rotate(-15deg)", zIndex: 1 }}>
          <CouplePicture src={PolaroidTwo} />
        </Polaroid>
        <Polaroid>
          <LandScapePicture src={PolaroidThree} />
        </Polaroid>
      </Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          margin: "100px 0",
        }}
      >
        <AnimatedText
          color="primary"
          text="Recepção"
          fontSize={{
            xs: "34px",
            md: "64px",
          }}
          textAlign="center"
          fontFamily={"Bacalisties"}
        />
        <div style={{ height: "100px" }} />
        <AnimatedText
          color="primary"
          text={
            "Nossa cerimônia acontecerá na igreja São Francisco e recepção no espaço domus. Pedimos que chegue um pouquinho antes das 21:00, pois começaremos pontualmente."
          }
          sx={{
            fontSize: {
              xs: "16px",
              md: "32px",
            },
          }}
          textAlign="center"
          fontFamily={"Cormorant Garamond"}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "60px",
            alignItems: "center",
          }}
        >
          <img
            src={"/images/church.jpeg"}
            style={{
              minWidth: "50%",
              maxWidth: "90%",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
          <img
            src={"/images/reception.jpeg"}
            style={{ minWidth: "50%", maxWidth: "90%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/puzzle_1.png"
          style={{ maxWidth: window.innerWidth }}
        />
        <img
          src="/images/puzzle_2.png"
          style={{ maxWidth: window.innerWidth }}
        />
      </Box>
    </>
  );
};

const CouplePicture = styled("img")({
  maxWidth: 350,
  maxHeight: 350,
});

const LandScapePicture = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    maxHeight: 350,
    maxWidth: 350,
  },
  maxWidth: 450,
  maxHeight: 350,
}));

export default ReceptionInfo;
