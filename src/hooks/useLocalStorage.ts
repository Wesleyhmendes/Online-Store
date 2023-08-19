const useLocalStorage = () => {
  const saveLocalStorage = (key: string, values: object[]) => {
    localStorage.setItem(key, JSON.stringify(values));
  };
  const readLocalStorage = (key: string) => JSON.parse(
    localStorage.getItem(key) as string,
  );
  const deleteItemLocalStorage = (key: string, id: string) => {
    const data = readLocalStorage(key);
    const newData = data.filter((item: any) => item.id !== id);
    saveLocalStorage(key, newData);
  };
  return {
    saveLocalStorage,
    readLocalStorage,
    deleteItemLocalStorage,
  };
};

export default useLocalStorage;
