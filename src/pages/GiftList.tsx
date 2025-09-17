import { Box, Snackbar, Typography } from "@mui/material";
import { AnimatedText, GiftCard } from "../components";

import useGiftList from "../lib/hooks/useGifList";
import { useState } from "react";

const GiftList: React.FC = () => {
  const { gifts, handleSelectGift } = useGiftList();
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddGift = (
    giftId: string,
    currAmount: number,
    giftName: string
  ) => {
    try {
      handleSelectGift(giftId, currAmount, giftName);
      setSnackbarMessage("Presente selecionado!");
    } catch {
      setSnackbarMessage("Erro ao seleciona presente!");
    }
  };

  return (
    <Box
      id="gift-list-page"
      sx={{
        minHeight: "100vh",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        background: "#66694c",
        px: { xs: 2, sm: 4, md: 6 },
        paddingBottom: "170px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "72px 20px",
          textAlign: "center",
          flexDirection: "column",
          gap: "60px",

          margin: "0 -20px",
        }}
      >
        <AnimatedText
          fontFamily={"Bacalisties"}
          color="white"
          text="Lista de presentes"
          variant="h4"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "37px",
              md: "70px",
            },
          }}
        />
        <AnimatedText
          fontFamily={"Cormorant Garamond"}
          color="white"
          text="Decidimos fazer uma Lista 100% online. Caso queiram nos presentear, é só escolher um item, selecionar a quantidade e confirmar. Observação: os valores indicados em cada produto têm caráter meramente referencial, servindo apenas como base. Fique à vontade para adquiri-los no estabelecimento de sua preferência."
          variant="h4"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "16px",
              md: "32px",
            },
          }}
        />
        <AnimatedText
          fontFamily={"Cormorant Garamond"}
          color="white"
          text="Endereço para entrega dos presentes: Rua Coronel Antônio Frota , 418. CEP: 62010120. Armazém Vitor Linhares"
          variant="h4"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "16px",
              md: "32px",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: { xs: 2, md: 4 },
          mt: 4,
          width: "100%",
          maxWidth: window.innerWidth,
          margin: "20px auto",
          placeItems: "center",
        }}
      >
        {gifts.map((gift, index) => (
          <GiftCard onSubmit={handleAddGift} key={index} {...gift} />
        ))}
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        gap={"20px"}
        mt={"60px"}
      >
        <AnimatedText
          fontFamily={"Cormorant Garamond"}
          color="white"
          text="Caso não tenha encontrado o presente ideal, mas mesmo assim ainda quiser contribuir, pode nos enviar qualquer quantia a partir desse QRCode."
          variant="h4"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "16px",
              md: "32px",
            },
          }}
        />
        <img
          src={"/images/gift-code.jpeg"}
          style={{ height: 250, width: 250 }}
        />
        <span>
          <Typography fontFamily={"Cormorant Garamond"}>
            Nome: Victor Emanuel Sousa Linhares
          </Typography>
          <Typography fontFamily={"Cormorant Garamond"}>
            Banco: Nubank
          </Typography>
          <Typography fontFamily={"Cormorant Garamond"}>
            Chave: victoremanuelfla@gmail.com
          </Typography>
        </span>
      </Box>
      <Snackbar
        open={Boolean(snackbarMessage)}
        onClose={() => setSnackbarMessage("")}
        autoHideDuration={5000}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
};

export default GiftList;
