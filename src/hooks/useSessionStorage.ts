import { useState, useEffect } from "react";

const useSessionStorage = (key: string, initial = '') : [string, (val: string) => void] => {
  const [value, setValue] = useState(initial)

  useEffect(() => {
    const val = sessionStorage.getItem(key);
    if (!!val) {
        setValue(val);
    }
  }, [key]);
  const setter = (val: string) => {
    setValue(val);
    sessionStorage.setItem(key, val);
  }

  return [ value, setter ];
}

export default useSessionStorage