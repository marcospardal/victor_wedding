import { useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { AnimatedSection, AnimatedText, CompanionInput } from "../components";
import buildConfirmationMessage from "../utils/message";
import useLocalStorage from "../lib/hooks/useLocalStorage";

import RVIcon from "/RV.png";
import PlantIcon from "/plant.png";

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
          padding: "156px 0",
        }}
      >
        <img src={PlantIcon} style={{ margin: "0 0 156px" }} />
        <AnimatedText
          color="primary"
          text="Raissa e Victor"
          fontSize="88px"
          textAlign="center"
          fontFamily={"Bacalisties"}
        />
        <div style={{ height: "220px" }} />
        <AnimatedText
          color="primary"
          text="22 | Novembro | 2025"
          fontFamily={"Coldiac"}
          fontSize="16px"
          textAlign="center"
        />
        <img
          src={RVIcon}
          style={{ height: "300px", width: "300px", margin: "180px 0 40px" }}
        />
        <AnimatedText
          color="primary"
          text="Seja bem vindo"
          variant="h4"
          textAlign="center"
          fontFamily={"Bacalisties"}
          sx={{ marginBottom: "72px" }}
        />
        {renderCormorantText(
          "Se você está aqui, é porque faz parte da nossa história! E que história, não é mesmo? Somos a prova viva do cuidado e do amor do nosso Senhor!"
        )}
        <div style={{ height: "40px" }} />
        {renderCormorantText(
          "E como a felicidade é muito mais gostosa quando compartilhada, criamos esse site para dividir alguns detalhes do nosso dia com você."
        )}
        <div style={{ height: "40px" }} />
        {renderCormorantText(
          "Um lembrete muito importante: é imprescindível que você confirme a sua presença! Para isso, contamos com sua ajuda clicando no menu “Confirme sua Presença” e informando sobre sua presença à nossa cerimonialista."
        )}
        <div style={{ height: "40px" }} />
        {renderCormorantText(
          "Caso queira nos presentear, disponibilizamos mais abaixo uma lista digital 100% segura, com algumas opções!"
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
            onChange={(value, type) =>
              handleChangeCompanion(value, type, index)
            }
            onBlur={() => saveItem("companions", JSON.stringify(companions))}
          />
        ))}
        <Button disabled={!guest} onClick={handleAddCompanion}>
          Adicionar acompanhante
        </Button>
        <Button
          disabled={!canConfirm}
          variant="contained"
          onClick={handleConfirm}
        >
          Confirmar
        </Button>
      </Box>
    </AnimatedSection>
  );
};

export default ImGoing;
