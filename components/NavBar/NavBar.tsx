"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Button from "../Buttons/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Login" },
    { id: 2, text: "Signup" },
  ];
  return (
    <div className="bg-transparet flex justify-between items-center h-24 mx-auto md:px-12 px-4 text-white fixed w-full t-[20px]">
      {/* Logo */}
      <Image
        src="/images/emoney-logo.png"
        width={173}
        height={53}
        alt="logo"
        className="md:w-[173px] md:h-[53px] w-[119px] h-[37px]"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-[#1C6BF5] font-semibold"
          >
            {item.text}
          </li>
        ))}
        <li>
          <Button>Connect Wallet</Button>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="flex md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <Image
          src="/images/emoney-logo.png"
          width={119}
          height={37}
          alt="logo"
          className="mx-auto p-4"
        />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl  duration-300 hover:text-[#1C6BF5] cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
        <li className="mt-4 px-2">
          <Button fullWidth>Connect Wallet</Button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
