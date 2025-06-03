'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from '../../../assests/navLogo.png';
import styles from '../../styles.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/homepage" },
  { label: "Interior", href: "/interior" },
  { label: "Exterior", href: "#" },
  { label: "Lawn & Garden", href: "#" },
  { label: "Specialized & Other Services", href: "#" },
  { label: "Articles", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // get current path

  return (
    <nav className={`container mx-auto px-8 py-3 flex items-center ${styles.fontDmSans}`}>
      {/* Logo */}
      <div className="mr-auto flex items-center">
      <Link href={"/"}>
      
        <Image src={logo} alt="Logo" width={200} height={100} className="h-20 w-48" />
      </Link>
      </div>

      {/* Desktop nav items */}
      <ul className="hidden lg:flex lg:space-x-4 xl:space-x-5 2xl:space-x-8 font-medium text-gray-800">
        {navItems.map((item) => {
          const isActive = item.href === pathname;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Buttons (desktop only) */}
      <div className="hidden lg:flex space-x-4 ml-6">
        <Link href={"/authentication"}>
          <button className="border border-black px-4 py-1 rounded hover:bg-gray-100">
            Log In / Sign Up
          </button>
        </Link>
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Become a Pro
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden ml-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-white border-t border-gray-300 flex flex-col lg:hidden">
          {navItems.map((item) => {
            const isActive = item.href === pathname;
            return (
              <li key={item.label} className="border-b border-gray-200">
                <Link
                  href={item.href}
                  className={`block px-6 py-3 text-gray-800 hover:bg-gray-100 ${isActive ? "text-blue-600 font-semibold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          {/* Mobile buttons */}
          <li className="flex flex-col px-6 py-3 space-y-2">
            <button className="border border-black px-4 py-2 rounded text-center hover:bg-gray-100 w-full">
              Log In / Sign Up
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full text-center">
              Become a Pro
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
