import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";

import ConfirmIcon from "/icons/confirm.svg";
import Politeness from "/icons/politeness.svg";
import Party from "/icons/party.svg";
import Clock from "/icons/clock.svg";
import Decoration from "/icons/decoration.svg";
import Smartphone from "/icons/smartphone.svg";
import Bye from "/icons/bye.svg";
import Invite from "/icons/invite.svg";
import Church from "/icons/church.svg";
import Polaroid from "../components/Polaroid";

const GuestManual: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        bgcolor: "background.main",
        px: { xs: 2, sm: 4, md: 6 },
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <Polaroid sx={{ transform: "rotate(-15deg)" }}>
          <img
            src={"/images/manual.jpeg"}
            style={{ maxHeight: 350, maxWidth: 350 }}
          />
        </Polaroid>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"60px"}
        >
          <img
            src={"/icons/hanger.png"}
            style={{ maxHeight: 150, maxWidth: 150 }}
          />
          <Typography
            fontFamily={"Bacalisties"}
            color="primary"
            sx={{ fontSize: { xs: "34px", md: "70px" } }}
          >
            Código de vestimenta
          </Typography>
          <Typography
            fontFamily={"Cormorant Garamond"}
            color="primary"
            sx={{ fontSize: { xs: "16px", md: "32px" } }}
          >
            Sugerimos a todos o traje passeio completo.
          </Typography>
          <Typography
            fontFamily={"Cormorant Garamond"}
            color="primary"
            sx={{ fontSize: { xs: "16px", md: "32px" } }}
          >
            Homens, pedimos que dispense bonés e bermudas.
          </Typography>
          <img
            src={"/icons/dresscode.png"}
            style={{ maxHeight: 80, maxWidth: 80 }}
          />
        </Box>
      </Box>
      <Typography variant="h4" color="primary" fontWeight={"bold"} mt="60px">
        Manual do Convidado
      </Typography>
      <Grid2 container width={"100%"}>
        <GridItem icon={ConfirmIcon} text={"Confirme Presença"} />
        <GridItem icon={Politeness} text={"Seja Educado"} />
        <GridItem icon={Party} text={"Aproveite Bastante"} />
        <GridItem icon={Clock} text={"Não se Atrase"} />
        <GridItem
          icon={Decoration}
          custonIconSize={70}
          text={"Cuidado com a decoração"}
        />
        <GridItem icon={Smartphone} text={"Não atrapalhe os fotográfos"} />
        <GridItem icon={Bye} text={"Não saia sem se despedir"} />
        <GridItem icon={Invite} text={"Convidado não convida!"} />
        <GridItem icon={Church} text={"Vá na cerimônia também"} />
      </Grid2>
      <Box
        sx={{
          background: "#66694c",
          padding: "170px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100vw",
          gap: "136px",
        }}
      >
        <Box display="grid" gap="20px">
          <Typography
            fontFamily={"Cormorant Garamond"}
            color="white"
            sx={{ fontSize: { xs: "16px", md: "32px" } }}
          >
            "Para que todos vejam, e saibam, e considerem, e juntamente entendam
            que a mão do Senhor fez isso, e o Santo de Israel o criou."
          </Typography>
          <Typography
            fontFamily={"Cormorant Garamond"}
            color="white"
            sx={{ fontSize: { xs: "16px", md: "32px" } }}
          >
            Isaías 41:20
          </Typography>
        </Box>
        <Typography
          fontFamily={"Bacalisties"}
          color="white"
          sx={{ fontSize: { xs: "60px", md: "120px" } }}
        >
          Nos vemos no grande dia!
        </Typography>
      </Box>
    </Box>
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
      sx={{
        height: { md: 200, xs: 150 },
        justifyContent: { xs: "center", md: "flex-start" },
      }}
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
