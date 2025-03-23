import { useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { AnimatedSection, AnimatedText, CompanionInput } from "../components";
import { Companions } from "../types/guest";
import buildConfirmationMessage from "../utils/message";

const ImGoing: React.FC = () => {
  const [guest, setGuest] = useState("");
  const [companions, setCompanions] = useState<Companions[]>([]);

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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

  const canConfirm = Boolean(guest && companions.every((c) => c.name && c.type));

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
        <TextField placeholder="Insira seu nome" onChange={handleChangeName} style={{ minWidth: "295px" }} />
        {companions.map((companion, index) => (
          <CompanionInput
            key={index}
            onRemove={() => handleRemoveCompanion(index)}
            companion={companion}
            onChange={(value, type) => handleChangeCompanion(value, type, index)}
          />
        ))}
        <Button disabled={!guest} onClick={handleAddCompanion}>
          Adicionar acompanhante
        </Button>
        <Button disabled={!canConfirm} variant="contained" onClick={handleConfirm}>
          Confirmar
        </Button>
      </Box>
    </AnimatedSection>
  );
};

export default ImGoing;
