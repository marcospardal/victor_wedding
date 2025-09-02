import { useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { AnimatedText, CompanionInput } from "../components";
import buildConfirmationMessage from "../utils/message";
import useLocalStorage from "../lib/hooks/useLocalStorage";

import ReceptionInfo from "./Reception";

const ImGoing: React.FC = () => {
  const { saveItem, getItem } = useLocalStorage();
  const registeredCompanions = getItem("companions");

  const [guest, setGuest] = useState(getItem("mainGuest") || "");
  const [companions, setCompanions] = useState<Companions[]>(
    registeredCompanions ? JSON.parse(registeredCompanions) : []
  );

  function handleChangeName(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setGuest(event.target.value);
  }

  const handleChangeCompanion = useCallback(
    (value: string, key: keyof Companions, index: number) => {
      const newList = [...companions];

      newList[index][key] = value;
      setCompanions(newList);
    },
    [companions]
  );

  const handleRemoveCompanion = useCallback((index: number) => {
    setCompanions((prev) => prev.filter((_, cIndex) => cIndex !== index));
  }, []);

  function handleAddCompanion() {
    setCompanions((prev) => [...prev, { name: "", type: "" }]);
  }

  function handleConfirm() {
    buildConfirmationMessage(guest, companions);
  }

  const canConfirm = Boolean(
    guest && companions.every((c) => c.name && c.type)
  );

  const renderCormorantText = (value: string) => (
    <AnimatedText
      color="primary"
      text={value}
      sx={{
        fontSize: {
          xs: "16px",
          md: "32px",
        },
      }}
      textAlign="center"
      fontFamily={"Cormorant Garamond"}
    />
  );

  return (
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
        paddingBottom: "200px",
      }}
    >
      <Box
        sx={{ position: "relative", height: "1500px", marginBottom: "72px" }}
      >
        <img
          src={"/images/background.jpeg"}
          style={{
            width: window.innerWidth,
            height: "1500px",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            bottom: "200px",
            position: "absolute",
            textAlign: "center",
            width: "100%",
          }}
        >
          <AnimatedText
            color="#FFF"
            text="Raissa e Victor"
            textAlign="center"
            fontFamily={"Bacalisties"}
            sx={{
              marginBottom: "72px",
              fontSize: {
                xs: "48px",
                md: "88px",
              },
            }}
          />
        </Box>
      </Box>
      <AnimatedText
        color="primary"
        text="22 | Novembro | 2025"
        fontFamily={"Coldiac"}
        fontSize="16px"
        textAlign="center"
        sx={{
          fontSize: {
            xs: "27px",
            md: "44px",
          },
          marginBottom: "120px",
        }}
      />
      <AnimatedText
        color="primary"
        text="Seja bem vindo"
        textAlign="center"
        fontFamily={"Bacalisties"}
        sx={{
          marginBottom: "72px",
          fontSize: {
            xs: "40px",
            md: "64px",
          },
        }}
      />
      {renderCormorantText(
        "Se você está aqui, é porque faz parte da nossa história! O que começou com um encontro inesperado logo se transformou em uma conexão profunda, cheia de amor, cumplicidade e sonhos compartilhados."
      )}
      <div style={{ height: "40px" }} />
      {renderCormorantText(
        "Agora, chegou a hora de dar o próximo passo nessa jornada e celebrar o amor que nos trouxe até aqui."
      )}
      <div style={{ height: "40px" }} />
      {renderCormorantText(
        "Em breve, diante de nossas famílias e amigos, diremos “sim” para uma nova fase, E como a felicidade é muito mais gostosa quando compartilhada, criamos esse site para dividir alguns detalhes do nosso dia com você."
      )}
      <div style={{ height: "40px" }} />
      {renderCormorantText(
        "Contamos com seu amor, sua oração e sua presença em nosso grande dia!"
      )}
      <div style={{ height: "40px" }} />
      {renderCormorantText("Com amor,")}
      <AnimatedText
        color="primary"
        text="Raissa e Victor"
        fontSize="34px"
        textAlign="center"
        fontFamily={"Bacalisties"}
      />
      <ReceptionInfo />
      <div style={{ height: "141px" }} />
      <AnimatedText
        color="primary"
        text="Confirme presença"
        sx={{
          fontSize: {
            xs: "34px",
            md: "64px",
          },
        }}
        textAlign="center"
        fontFamily={"Bacalisties"}
        marginBottom={"60px"}
      />
      {renderCormorantText(
        "É imprescindível a confirmação de sua presença. informe seu nome e os nomes dos convidados que comparecerão com você (incluindo as crianças  maiores de 07 anos) e você será direcionado ao WhatsApp de nossa cerimonialista."
      )}
      <TextField
        placeholder="Insira seu nome"
        onChange={handleChangeName}
        style={{ minWidth: "255px" }}
        value={guest}
        slotProps={{
          input: {
            sx: {
              color: "#53583E",
              marginTop: "70px",
            },
          },
        }}
        onBlur={() => saveItem("mainGuest", guest)}
      />
      {companions.map((companion, index) => (
        <CompanionInput
          key={index}
          onRemove={() => handleRemoveCompanion(index)}
          companion={companion}
          onChange={(value, type) => handleChangeCompanion(value, type, index)}
          onBlur={() => saveItem("companions", JSON.stringify(companions))}
        />
      ))}
      <Button
        disabled={!guest}
        onClick={handleAddCompanion}
        sx={{ marginBottom: "60px" }}
      >
        Adicionar acompanhante
      </Button>
      {renderCormorantText(
        "Somente os nomes confirmados até o dia 01/11/2025 serão colocados na organização das mesas, por isso, pedimos gentilmente que não se esqueça!"
      )}
      <Button
        sx={{ marginTop: "60px" }}
        disabled={!canConfirm}
        variant="contained"
        onClick={handleConfirm}
      >
        Confirmar
      </Button>
    </Box>
  );
};

export default ImGoing;
