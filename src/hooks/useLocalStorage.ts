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
    localStorage.removeItem(key);
    saveLocalStorage(key, newData);
  };
  const deleteLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };
  return {
    saveLocalStorage,
    readLocalStorage,
    deleteLocalStorage,
    deleteItemLocalStorage,
  };
};
export default useLocalStorage;
