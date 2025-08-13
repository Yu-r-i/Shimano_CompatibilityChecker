/**
 * src/index.js
 *
 * Entry point for the React application
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Split CSS: global/base + layout
import "./styles/base.css";
import "./styles/layout.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
