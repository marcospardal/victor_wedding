type Companions = {
  name: string;
  type: string;
};

type GuestConfirmation = {
  guestName: string;
  giftName: string;
  giftAmount: number;
  companions: Companions[];
}