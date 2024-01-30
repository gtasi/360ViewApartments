import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/flaticon.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
