import { useState } from "react";

// export default function useDisclosure(bool: boolean) {
//   const [opened, setOpened] = useState(bool);

//   const handlers = {
//     open: () => setOpened(true),
//     close: () => setOpened(false),
//     toggle: () => setOpened((prev) => !prev),
//   };

//   return [opened, handlers] as [boolean, typeof handlers];
// }

function useDisclosure(
  initState: boolean,
  callbacks?: {
    onOpen?: () => void;
    onClose?: () => void;
  }
) {
  const [opened, setOpened] = useState(initState);
  const handlers = {
    open: () => {
      callbacks?.onOpen?.();
      setOpened(true);
    },
    close: () => {
      if (callbacks?.onClose) {
        callbacks.onClose();
      }
      setOpened(false);
    },
    toggle: () => setOpened((prev) => !prev),
  };

  return [opened, handlers] as [boolean, typeof handlers];
}

export function UseDisClosureDemo() {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log("Opened"),
    onClose: () => console.log("Closed"),
  });

  return (
    <div>
      <h1>{opened ? "Opened" : "Closed"}</h1>
      <button onClick={handlers.toggle}>Toggle</button>
      <button onClick={handlers.open}>Open</button>
      <button onClick={handlers.close}>Close</button>
    </div>
  );
}
