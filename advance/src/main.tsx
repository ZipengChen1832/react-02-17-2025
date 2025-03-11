import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Strict mode renders the app twice to detect side effects
// so i'll just remove it

createRoot(document.getElementById("root")!).render(<App />);
