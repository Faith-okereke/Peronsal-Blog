import { useContext, useState } from "react";
import "./App.css";
import BlogBody from "./components/BlogBody";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBlogModal from "./pages/NewBlogModal";
import BlogContext from "./contextStore/BlogContext";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact/>} path="/contact-us" />
        <Route element={<Home />} path="/about-us" />
        <Route element={<NewBlogModal />} path="/new-blog" />
        <Route element={<BlogContext />} path="/blog-123" />
        <Route element={<Login/>} path="/login"/>
      </Routes>
      <BlogBody />
    </div>
  );
}

export default App;
