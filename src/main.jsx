import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // React 18+
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
