import { Box } from "@mui/material";
import { AnimatedSection, AnimatedText, GiftCard } from "../components";
import useGiftList from "../lib/hooks/useGifList";

const GiftList: React.FC = () => {
  const { gifts, handleSelectGift } = useGiftList();

  return (
    <AnimatedSection>
      <Box
        id="gift-list-page"
        sx={{
          minHeight: "100vh",
          paddingTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          bgcolor: "background.default",
          scrollSnapAlign: "start",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <AnimatedText
          fontFamily={"Outfit"}
          color="primary"
          text="Confira a lista de presentes dos noivos"
          variant="h4"
          textAlign="center"
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
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
    </AnimatedSection>
  );
};

export default GiftList;
