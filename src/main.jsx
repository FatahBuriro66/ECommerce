import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Services from "./Pages/Services/Services.jsx";
import Work from "./Pages/Work/Work.jsx";
import Layout from "./Layout.jsx";
import Login from "./Pages/Resgistration/Login/Login.jsx";
import Register from "./Pages/Resgistration/Register/Register.jsx";
import App from "./App.jsx";
import "./index.css";
import AdminDashBoard from "./Admin/AdminDashBoard.jsx";
import Home from "./Pages/Home/Home.jsx";

// const routerApp = (
//   <Routes>
//     <Route path="/" element={<Layout />} />
//     <Route path=" " element={<Home />} />
//     <Route path="/Services" element={<Services />} />
//     <Route path="/Work" element={<Work />} />
//     <Route path="/SignIn" element={<Login />} />
//     <Route path="/SignUp" element={<Register />} />
//     <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
//   </Routes>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>{routerApp}</Router>
//   </React.StrictMode>
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="work" element={<Work />}></Route>
      <Route path="contact" element={<ContactUs></ContactUs>}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="service" element={<Services />}></Route>
      <Route
        path="dashboard"
        element={() => {
          return isAuthenticated && user.role === "admin" ? (
            <Dashboard />
          ) : (
            <Redirect to="/login" />
          );
        }}
      ></Route>
      {/* <Route path="user/:userid" element={<User></User>}></Route> */}
      {/* <Route path="github" element={<Git></Git>}></Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* it require a prop */}
  </React.StrictMode>
);
