import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const handler = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, handler];
};

export default useToggle;
