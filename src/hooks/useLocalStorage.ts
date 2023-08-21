const useLocalStorage = () => {
  const saveLocalStorage = (key: string, values: object[] | object) => {
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
  const clearLocalStorage = (key:string) => {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify([]));
  };
  return {
    saveLocalStorage,
    readLocalStorage,
    clearLocalStorage,
    deleteItemLocalStorage,
  };
};

export default useLocalStorage;
