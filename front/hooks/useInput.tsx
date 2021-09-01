import { useState, useCallback } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState<string | any>(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
