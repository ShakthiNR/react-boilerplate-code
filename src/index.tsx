import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"

const rootElm = document.getElementById("root")

if(!rootElm) throw new Error("Cannot find root element")

const root = createRoot(rootElm)

console.log("Env Var - Node Env ", process.env.NODE_ENV)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
