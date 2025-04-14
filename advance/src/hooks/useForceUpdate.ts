import { useState } from "react";

export default function useForceUpdate() {
  const [bool, toggle] = useState(false);
  return () => {
    toggle((prev) => !prev);
  };
}
