import { useEffect, useState } from "react";
import { getData } from "../api/firestore";

const useGuestList = (): GuestList => {
  const [guestList, setGuestList] = useState<GuestConfirmation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const guestData = await getData<GuestConfirmation>("lista_convidados");
      setGuestList(guestData);
    };

    fetchData();
  }, []);

  return {
    guests: guestList
  }
};

type GuestList = {
  guests: GuestConfirmation[]
}

export default useGuestList;