import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

export async function getData<T>(collectionName: string): Promise<T[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));
}

export const updateItemTotal = async (
  collectionName: string,
  docId: string,
  data: Record<string, number | string>
) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const saveGuestGift = async (guestConfirmation: GuestConfirmation) => {
  const collectionName = "lista_convidados";
  try {
    const snapshot = await getDocs(collection(db, collectionName));
    const guest = snapshot.docs.find(
      (doc) => doc.data().guestName === guestConfirmation.guestName
    );

    if (guest?.data()) {
      const docRef = doc(db, collectionName, guest.id);
      await updateDoc(docRef, guestConfirmation);
    } else {
      await addDoc(collection(db, collectionName), guestConfirmation);
    }
  } catch (err) {
    console.error(err);
  }
};

export const confirmPresence = async (guestConfirmation: GuestConfirmation) => {
  try {
    await addDoc(collection(db, "lista_convidados"), guestConfirmation);
  } catch (err) {
    console.error(err);
  }
};
