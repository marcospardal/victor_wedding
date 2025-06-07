import { useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { AnimatedSection, AnimatedText, CompanionInput } from "../components";
import buildConfirmationMessage from "../utils/message";
import useLocalStorage from "../lib/hooks/useLocalStorage";

const ImGoing: React.FC = () => {
  const { saveItem, getItem } = useLocalStorage();
  const registeredCompanions = getItem("companions");

  const [guest, setGuest] = useState(getItem("mainGuest") || "");
  const [companions, setCompanions] = useState<Companions[]>(registeredCompanions ? JSON.parse(registeredCompanions) : []);

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
        <TextField
          placeholder="Insira seu nome"
          onChange={handleChangeName}
          style={{ minWidth: "255px" }}
          value={guest}
          slotProps={{
            input: {
              sx: {
                color: "#53583E",
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
