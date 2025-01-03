import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-blue-950 " >
      <div className="p-8 flex items-center justify-between py-5 font-medium shadow-xl">
        <Link to="/">
          <h1 className="text-white font-bold text-5xl">Investify
          </h1>{" "}
        </Link>
        <ul className="hidden sm:flex gap-5 text-2xl text-gray-700">
          <NavLink
            to="/"
            className="flex flex-col text-3xl text-white items-center gap-1 hover:text-orange-600"
          >
            <p>Home</p>
          </NavLink>
          {/* <NavLink
            to="/adminlogin"
            className="flex flex-col  text-3xl text-white items-center gap-1 hover:text-orange-600"
          >
            <p>Admin</p>
          </NavLink> */}
          {/* <NavLink
            to="/"
            className="flex flex-col  text-3xl text-white items-center gap-1 hover:text-orange-600"
          >
            <p>User</p>
          </NavLink> */}
        </ul>

        <div className="flex items-center gap-6 lg:hidden">
          <img
            onClick={() => setVisible(true)}
            src="./images/menu_icon.png"
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
        {/* side bar menu for small screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src=".images/dropdown_icon.png"
                alt=""
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              Features
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
