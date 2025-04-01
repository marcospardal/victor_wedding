import { db } from "./firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export const getData = async (collectionName: string): Promise<Gift[]> => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Gift);
};

export const updateItemTotal = async (collectionName: string, docId: string, data: Record<string, number | string>) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
};
