import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";

import { AnimatedSection } from "../components";

import ConfirmIcon from "/icons/confirm.svg";
import Politeness from "/icons/politeness.svg";
import Party from "/icons/party.svg";
import Clock from "/icons/clock.svg";
import Decoration from "/icons/decoration.svg";
import Smartphone from "/icons/smartphone.svg";
import Bye from "/icons/bye.svg";
import Invite from "/icons/invite.svg";
import Church from "/icons/church.svg";

const GuestManual: React.FC = () => {
  return (
    <AnimatedSection>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px",
          bgcolor: "background.main",
          scrollSnapAlign: "start",
          px: { xs: 2, sm: 4, md: 6 },
          gap: '20px'
        }}
      >
        <Typography variant="h4" color="primary" fontWeight={"bold"}>
          Manual do Convidado
        </Typography>
        <Grid2 container width={"100%"}>
          <GridItem icon={ConfirmIcon} text={"Confirme Presença"} />
          <GridItem icon={Politeness} text={"Seja Educado"} />
          <GridItem icon={Party} text={"Aproveite Bastante"} />
          <GridItem icon={Clock} text={"Não se Atrase"} />
          <GridItem icon={Decoration} custonIconSize={70} text={"Cuidado com a decoração"} />
          <GridItem icon={Smartphone} text={"Não atrapalhe os fotográfos"} />
          <GridItem icon={Bye} text={"Não saia sem se despedir"} />
          <GridItem icon={Invite} text={"Convidado não convida!"} />
          <GridItem icon={Church} text={"Vá na cerimônia também"} />
        </Grid2>
      </Box>
    </AnimatedSection>
  );
};

type GridItemProps = {
  text: string;
  icon: string;
  custonIconSize?: number;
};

const GridItem: React.FC<GridItemProps> = ({ icon, text, custonIconSize }) => {
  const iconSize = custonIconSize || 50;

  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      padding={"0 20px"}
      sx={{ height: { md: 200, xs: 150 }, justifyContent: { xs: 'center', md: 'flex-start' } }}
      display={"flex"}
      alignItems={"center"}
    >
      <img src={icon} style={{ height: iconSize, width: iconSize, flex: 1 }} />
      <Typography variant="h6" color="primary" fontWeight={"bold"} flex={2}>
        {text.toUpperCase()}
      </Typography>
    </Grid2>
  );
};

export default GuestManual;
