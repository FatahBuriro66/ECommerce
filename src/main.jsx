import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Services from "./Pages/Services/Services.jsx";
import Work from "./Pages/Work/Work.jsx";
import Login from "./Pages/Resgistration/Login/Login.jsx";
import Register from "./Pages/Resgistration/Register/Register.jsx";
import App from "./App.jsx";
import "./index.css";

const routerApp = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Work" element={<Work />} />
    <Route path="/SignIn" element={<Login />} />
    <Route path="/SignUp" element={<Register />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>{routerApp}</Router>
  </React.StrictMode>
);
