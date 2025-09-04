import { Box } from "@mui/material";
import { AnimatedText, GiftCard } from "../components";
import useGiftList from "../lib/hooks/useGifList";

const GiftList: React.FC = () => {
  const { gifts, handleSelectGift } = useGiftList();

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
          <GiftCard onSubmit={handleSelectGift} key={index} {...gift} />
        ))}
      </Box>
    </Box>
  );
};

export default GiftList;
