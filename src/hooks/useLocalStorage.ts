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
<<<<<<< HEAD

  return {
    saveLocalStorage,
    readLocalStorage,
    deleteLocalStorage,
    deleteItemLocalStorage,
  };
=======
  return { saveLocalStorage, readLocalStorage, deleteLocalStorage };
>>>>>>> parent of c6337c9 (feat: delete localStorage)
};

export default useLocalStorage;
