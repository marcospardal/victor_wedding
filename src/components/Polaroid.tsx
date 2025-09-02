import { Paper } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

const Polaroid: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      {...rest}
      component={Paper}
      elevation={3}
      sx={{ padding: "30px 12px 60px 12px", background: "#FFF", ...rest.sx }}
    >
      {children}
    </Box>
  );
};

export default Polaroid;
