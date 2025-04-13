import { Add, Remove } from "@mui/icons-material";
import { Box, Button, ButtonGroup, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";

type GifCardProps = Gift & {
  onSubmit: (giftId: string, currAmount: number, giftName: string) => void;
};

const GiftCard: React.FC<GifCardProps> = ({ description, name, quantity, img_url, id, onSubmit }) => {
  return (
    <GiftContainer
      sx={{
        minWidth: {
          lg: "400px",
          xs: "300px",
        },
      }}
    >
      <img src={img_url} alt={`gift-${name}-img`} style={{ maxHeight: 150, maxWidth: 150, minHeight: 150, alignSelf: "center" }} />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "150px" }}>
        <Typography
          variant="h6"
          color="primary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="caption"
          color="primary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
        {quantity ? (
          <SelectAmount itemName={name} itemId={id} maxQuantity={quantity} onSubmit={onSubmit} />
        ) : (
          <Typography fontWeight={"bold"} color="primary">
            Esgotado :C
          </Typography>
        )}
      </Box>
    </GiftContainer>
  );
};

type AmountProps = {
  maxQuantity: number;
  itemId: string;
  itemName: string;
  onSubmit: (docId: string, amount: number, itemName: string) => void;
};

const SelectAmount: React.FC<AmountProps> = ({ maxQuantity, itemId, itemName, onSubmit }) => {
  const [currAmount, setCurrAmount] = useState<number>(0);

  const handleClickAmount = (opt: "remove" | "add") => () => {
    setCurrAmount((prev) => {
      if (opt === "remove" && prev > 0) return prev - 1;
      else if (opt === "add" && prev < maxQuantity) return prev + 1;

      return prev;
    });
  };

  const handleSubmit = () => {
    onSubmit(itemId, currAmount, itemName);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"self-start"}
      sx={{
        display: {
          md: "flex",
        },
      }}
    >
      <ButtonGroup color="primary">
        <IconButton onClick={handleClickAmount("remove")}>
          <Remove />
        </IconButton>
        <Typography variant="body2" alignSelf={"center"} color="primary">
          {currAmount} / {maxQuantity}
        </Typography>
        <IconButton onClick={handleClickAmount("add")}>
          <Add />
        </IconButton>
      </ButtonGroup>
      <Button disabled={!currAmount} variant={currAmount ? "contained" : "text"} color="primary" onClick={handleSubmit}>
        Confimar
      </Button>
    </Box>
  );
};

const GiftContainer = styled(Box)({
  width: "100%",
  mx: "auto",
  display: "flex",
  alignItems: "self-start",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  padding: "10px 15px",
  borderRadius: "8px",
  gap: "10px",
  minWidth: "300px",
  maxWidth: "300px",
  overflow: "hidden",
});

export default GiftCard;
