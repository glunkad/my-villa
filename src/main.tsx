import './index.css'
import {ThemeProvider} from "@material-tailwind/react";
import {App} from "./App.tsx";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById('root') || document.body).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);