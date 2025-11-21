import { useEffect, useState } from "react";
import type { SetStateAction, Dispatch } from "react";

export default function useLocalStorageState<T>(
  key: string,
  initialStateValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialStateValue;
    }

    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialStateValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialStateValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    }
  }, [value, key]);

  return [value, setValue];
}
