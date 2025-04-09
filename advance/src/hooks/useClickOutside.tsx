import { useEffect, useRef, useState } from "react";

export default function useClickOutside<T extends HTMLElement>(
  callback: () => void
) {
  const clickRef = useRef<T>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // console.log(clickRef.current);

      if (clickRef.current && !clickRef.current.contains(target)) {
        // console.log("ref", clickRef.current);
        // console.log("target", target);
        callback();
      }
    };
    
    document.addEventListener("mousedown", handleClick);
    
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return clickRef;
}

export function UseClickOutsideDemo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpened(false));

  return (
    <>
      <button onClick={() => setOpened(true)}>Open dropdown</button>

      {opened && (
        <div
          style={{
            border: "1px solid white",
            padding: "10px",
          }}
          ref={ref}
        >
          <span>Click outside to close</span>
        </div>
      )}
    </>
  );
}
