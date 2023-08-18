const useLocalStorage = () => {
  const saveLocalStorage = (key: string, values: object[]) => {
    localStorage.setItem(key, JSON.stringify(values));
  };
  const readLocalStorage = (key: string) => JSON.parse(
    localStorage.getItem(key) as string,
  );
  const deleteLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };
  return { saveLocalStorage, readLocalStorage, deleteLocalStorage };
};

export default useLocalStorage;
