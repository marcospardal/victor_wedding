import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, styled, IconButton } from "@mui/material";
import AnimatedSection from "./AnimatedSection";
import { Close } from "@mui/icons-material";

enum CompanionType {
  CHILD = "Filho",
  SPOUSE = "Cônjuge",
  PARENT = "Pai/Mãe",
  FAMILY = "Família",
}

type CompanionInputProps = {
  companion: Companions;
  onChange: (value: string, type: "name" | "type") => void;
  onRemove: VoidFunction;
  onBlur: VoidFunction;
};

const CompanionInput: React.FC<CompanionInputProps> = ({ companion, onChange, onRemove, onBlur }: CompanionInputProps) => {
  return (
    <AnimatedSection animationKey="fadeIn">
      <GuestInput
        placeholder="Insira seu nome"
        onChange={(event) => onChange(event.target.value, "name")}
        value={companion.name}
        onBlur={onBlur}
        slotProps={{
          input: {
            sx: {
              color: "#53583E",
            },
            endAdornment: (
              <InputAdornment position="end">
                <FormControl fullWidth style={{ minWidth: 80 }}>
                  <InputLabel
                    sx={{
                      color: "#53583E",
                    }}
                    id="demo-simple-select-label"
                  >
                    {!companion.type ? "Tipo" : ""}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={companion.type}
                    label="Tipo"
                    onChange={(event) => onChange(event.target.value, "type")}
                    slotProps={{
                      input: {
                        sx: {
                          color: "#53583E",
                        },
                      },
                    }}
                  >
                    <MenuItem sx={{ color: "#53583E" }} value={CompanionType.CHILD}>Filho</MenuItem>
                    <MenuItem sx={{ color: "#53583E" }} value={CompanionType.FAMILY}>Família</MenuItem>
                    <MenuItem sx={{ color: "#53583E" }} value={CompanionType.PARENT}>Pai/Mãe</MenuItem>
                    <MenuItem sx={{ color: "#53583E" }} value={CompanionType.SPOUSE}>Cônjuge</MenuItem>
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
