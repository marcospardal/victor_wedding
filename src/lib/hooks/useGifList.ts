import { useEffect, useState } from "react";
import { getData, updateItemTotal } from "../api/firestore";

const collectionName = "lista_presentes";

const useGiftList = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData(collectionName);
    setGifts(data);
  };

  const handleSelectGift = async (docId: string, currAmount: number) => {
    const selectedItem = gifts.find((item) => item.id === docId);

    if (selectedItem) {
      await updateItemTotal(collectionName, docId, { quantity: selectedItem?.quantity - currAmount });
      fetchData();
    }
  };

  return {
    gifts,
    handleSelectGift,
  };
};

export default useGiftList;
