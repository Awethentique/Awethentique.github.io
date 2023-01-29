import { useState, useEffect } from "react";

const getStorageValue= (key:string, defaultValue:string)=> {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved as any);
  return initial || defaultValue;
}

export const useLocalStorage = (key:string, defaultValue:string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
