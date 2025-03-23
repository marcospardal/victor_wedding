import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, styled, IconButton } from "@mui/material";
import { Companions, CompanionType } from "../types/guest";
import AnimatedSection from "./AnimatedSection";
import { Close } from "@mui/icons-material";

type CompanionInputProps = {
  companion: Companions;
  onChange: (value: string, type: "name" | "type") => void;
  onRemove: VoidFunction;
};

const CompanionInput: React.FC<CompanionInputProps> = ({ companion, onChange, onRemove }: CompanionInputProps) => {
  return (
    <AnimatedSection animationKey="fadeIn">
      <GuestInput
        placeholder="Insira seu nome"
        onChange={(event) => onChange(event.target.value, "name")}
        value={companion.name}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <FormControl fullWidth style={{ minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-label">{!companion.type ? "Tipo" : ""}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={companion.type}
                    label="Tipo"
                    onChange={(event) => onChange(event.target.value, "type")}
                  >
                    <MenuItem value={CompanionType.CHILD}>Filho</MenuItem>
                    <MenuItem value={CompanionType.FAMILY}>Família</MenuItem>
                    <MenuItem value={CompanionType.PARENT}>Pai/Mãe</MenuItem>
                    <MenuItem value={CompanionType.SPOUSE}>Cônjuge</MenuItem>
                  </Select>
                </FormControl>
              </InputAdornment>
            ),
          },
        }}
      />
      <IconButton style={{ marginTop: "8px" }} onClick={onRemove}>
        <Close />
      </IconButton>
    </AnimatedSection>
  );
};

const GuestInput = styled(TextField)({
  ".MuiOutlinedInput-root": {
    paddingRight: 0,
    maxWidth: "295px",
  },
  marginLeft: "40px",
});

export default CompanionInput;
