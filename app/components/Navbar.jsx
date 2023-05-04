"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import LogoCompleto from "../assets/logoCompleto.jpg";
import Image from "next/image";
import Logo from "../assets/logo.jpg";

const MENU_LIST = [
  {
    text: "Tortilleria Valle Verde",
    href: "/",
  },
  {
    text: "Productos",
    href: "/productos",
  },
  {
    text: "Nuestra Historia",
    href: "/nuestra-historia",
  },
  {
    text: "Contactanos",
    href: "/contactanos",
  },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeRoute, setActiveRoute] = useState("/");

  const handleLogoClick = () => {
    setActiveRoute("/");
    setNavActive(false);
  };

  const handleMenuClick = (idx, href) => {
    setActiveIdx(idx);
    setActiveRoute(href);
    setNavActive(false);
  };

  return (
    <header>
      <nav className="nav">
        <Link href={"/"}>
          <div onClick={handleLogoClick}>
            <Image
              width={60}
              height={60}
              src={Logo}
              alt="Logo Empresa"
              priority
            />
          </div>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""}  nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => {
            const isActive = activeRoute === menu.href;
            return (
              <div
                onClick={() => handleMenuClick(idx, menu.href)}
                key={menu.text}
              >
                <NavItem active={isActive} {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
