import ReactDOM from "react-dom/client";
import App from "./App";
import ColorProvider from "./context/ColorProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ColorProvider>
        <App />
    </ColorProvider>
);
