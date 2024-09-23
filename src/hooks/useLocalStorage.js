import { useState, useEffect } from "react";
 
const PREFIX = 'snippet-lab-'
 
function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
 
  const [value, setValue] = useState(() => { 
    const jsonValue = localStorage.getItem(prefixedKey);
    
    if (jsonValue != null) return JSON.parse(jsonValue);
 
    if (typeof initialValue === "function") {
      return initialValue()
    } else {
      return initialValue;
    }
  });
 
  useEffect(() => {
    if(!value) setValue(/* Set to null */)
      localStorage.setItem(prefixedKey, JSON.stringify(value));
      /* Set the localstorage's prefixed key with the new stringified json of value */
  }, [prefixedKey, value]);
 
  return [value, setValue];
}
 
export default useLocalStorage;