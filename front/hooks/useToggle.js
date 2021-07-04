import { useState, useCallback } from "react";

const useToggle = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, handler];
};

export default useToggle;
