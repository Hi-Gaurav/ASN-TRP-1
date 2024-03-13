"use client";
import React, { useState } from "react";
import { menuItems } from "@/seed/menuItems";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleSubmenu = (open) => {
    setIsSubmenuOpen(open);
  };
  return (
    <>
      <nav className="bg-black text-white h-12 px-4">
        <ul className="flex items-center space-x-4 h-full">
          <li className="cursor-pointer">Home</li>
          <li
            onClick={() => handleSubmenu(!isSubmenuOpen)}
            className={`relative cursor-pointer ${
              isSubmenuOpen ? "border-b-2" : ""
            } h-full flex`}
          >
            <div className="flex items-center gap-1">
              Store {isSubmenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isSubmenuOpen && (
              <div className="absolute top-11 left-0 mt-2 bg-gray-800 h-auto p-2 md:p-4 rounded flex flex-col md:flex-row gap-4 md:gap-20 w-auto min-w-max md:w-fit">
                {menuItems.menus.map((menu) => (
                  <div className="w-full md:w-80" key={menu.title}>
                    <h2 className="text-white text-lg whitespace-nowrap mb-6">
                      {menu.title}
                    </h2>
                    <ul className="grid grid-cols-2 gap-4 ml-2">
                      {menu.items.map((item) => (
                        <li
                          key={item.name}
                          className="text-gray-300 hover:text-gray-100 cursor-pointer"
                        >
                          <a href={item.url}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li className="cursor-pointer">
            <a href="/about" className="hover:bg-gray-700 p-2 rounded">
              Live Tv
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
