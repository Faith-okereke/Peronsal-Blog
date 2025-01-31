import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import BlogContext from "./contextStore/BlogContext.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <BlogContext>
        <NavBar />
        <App />
        <Footer/>
      </BlogContext>
    </React.StrictMode>
  </BrowserRouter>
);
