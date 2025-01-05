import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import BlogLogo from "../assets/BlogLogo.png";
import avatar from "../assets/Avatar.jpg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleNavBar=(index)=>{
    setIsActive(true)
  }
  const toogleSearch = () => {
    setIsOpen(true);
  };
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/contact",
      title: "Contact us",
    },
    {
      path: "/about",
      title: "About us",
    },
    {
      path: "/new-blog",
      title: "New blog",
    },
  ];
  return (
    <div className="sticky top-0 z-30">
      <div className="flex items-stretch justify-evenly bg-white h-20 px-3">
        <img
          src={BlogLogo}
          className="select-none w-96 h-48 absolute -top-16 -left-12"
        />
        <div className="flex justify-between items-center gap-24 pl-64">
          <ul className="flex justify-center items-center gap-5 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={`text-black text-lg no-underline font-semi-bold hover:text-gray-700 ${
                    isActive[index] ? `active` : ``
                  }`}
                  onClick={() => {
                    toggleNavBar(index)
                  }}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 justify-center items-center align-middle relative">
            <input
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 ease-in-out bg-gray-200 border border-gray-300 rounded-lg p-2 ml-2 ${
                isOpen ? "w-48" : "w-0 opacity-0 "
              }`}
              style={{ transition: "width 0.3s ease-in-out" }}
            />
            <i
              className="cursor-pointer absolute right-20"
              onClick={toogleSearch}
            >
              <BiSearchAlt2 />
            </i>
            <Link to="/profile">
              <button className=" rounded-lg  text-black hover:text-primary font-bold transition-colors">
                <img
                  className="w-10 h-10 object-cover rounded-full border-[2px] border-primary"
                  src={avatar}
                  alt="avatar"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
