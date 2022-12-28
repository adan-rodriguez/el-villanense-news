import ReactDOM from "react-dom/client";
// import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // La utilización de Helmet tiene sentido si la página se renderiza del lado del servidor.
  // TODO: renderizar del lado del servidor
  // <HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </HelmetProvider>
);
