import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Dish from "./Dish";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Dish />
  </StrictMode>
);
