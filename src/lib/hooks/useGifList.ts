import { useEffect, useState } from "react";
import { getData, saveGuestGift, updateItemTotal } from "../api/firestore";
import useLocalStorage from "./useLocalStorage";

const collectionName = "lista_presentes";

const useGiftList = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const { getItem } = useLocalStorage();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData<Gift>(collectionName);
    setGifts(data.sort((a, b) => a.price < b.price ? -1 : 1));
  };

  const handleSelectGift = async (docId: string, currAmount: number, giftName: string) => {
    const selectedItem = gifts.find((item) => item.id === docId);

    if (selectedItem) {
      await updateItemTotal(collectionName, docId, { quantity: selectedItem?.quantity - currAmount });
      saveGuestConfirmation(giftName, currAmount);
      fetchData();
    }
  };

  const saveGuestConfirmation = async (giftName: string, currAmount: number) => {
    const guestName = getItem("mainGuest");
    const companions = getItem("companions");

    if (guestName) {
      await saveGuestGift({
        companions: companions ? JSON.parse(companions) as Companions[] : [],
        guestName,
        giftAmount: currAmount,
        giftName,
      });
    }
  }

  return {
    gifts,
    handleSelectGift,
  };
};

export default useGiftList;
