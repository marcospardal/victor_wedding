const useLocalStorage = () => {
  const saveItem = (itemId: string, item: string) => {
    localStorage.setItem(itemId, item);
  }

  const getItem = (itemId: string) => {
    const item = localStorage.getItem(itemId);
    return item;
  }

  return {
    saveItem,
    getItem
  }
}

export default useLocalStorage;