import { useEffect } from "react";

const useLocalStorage = (
  callback: () => void,
  dependencies: unknown[]
) => {
  useEffect(() => {
    callback();
  }, dependencies);
};

export default useLocalStorage;