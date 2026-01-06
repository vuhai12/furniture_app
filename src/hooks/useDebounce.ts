import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
  const [valueDebounce, setValueDebounce] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValueDebounce(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return valueDebounce;
};
