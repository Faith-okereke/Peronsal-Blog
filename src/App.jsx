import { useContext, useState } from "react";
import "./App.css";
import BlogBody from "./components/BlogBody";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBlogModal from "./pages/NewBlog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile  from "./pages/Profile";
function App() {
  const user = true
  return (
    <div className="">
      <Routes>
        <Route element={user? <Home /> : <Login/>} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<NewBlogModal />} path="/new-blog" />
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/profile" />
        <Route element ={<BlogBody/>} path="/blog/:id"/>
      </Routes>
    </div>
  );
}

export default App;
