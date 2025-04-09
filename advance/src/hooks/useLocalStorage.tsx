import React, { useEffect, useState } from "react";

interface UseLocalStorage<T> {
  /** Local storage key */
  key: string;

  /** Default value that will be set if value is not found in local storage */
  defaultValue?: T;

  // /** If set to true, value will be updated in useEffect after mount. Default value is true. */
  // getInitialValueInEffect?: boolean;

  // /** Determines whether the value must be synced between browser tabs, `true` by default */
  // sync?: boolean;

  // /** Function to serialize value into a string to be saved in local storage */
  // serialize?: (value: T) => string;

  // /** Function to deserialize string value from local storage to value */
  // deserialize?: (value: string) => T;
}

function useLocalStorage<T = string>(
  options: UseLocalStorage<T>
): readonly [
  T, // current value
  (val: T | ((prevState: T) => T)) => void // callback to set value in storage
] {
  const { key, defaultValue } = options;
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return defaultValue;
    }
  });

  const setStoreValue = (value: T | ((prevState: T) => T)) => {
    if (value instanceof Function) {
      value = value(storedValue);
    }
    setStoredValue(value);
    const strToStore = JSON.stringify(value);
    window.localStorage.setItem(key, strToStore);
  };

  return [storedValue, setStoreValue];
}

export function UseLocalStorageDemo() {
  const [colorScheme, setColorScheme] = useLocalStorage<"light" | "dark">({
    key: "color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = () =>
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div onClick={toggleColorScheme}>
      {colorScheme === "dark" ? "dark" : "light"}
    </div>
  );
}
