"use client";

import React from "react";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo-150x150.jpg";

function Navbar_() {
  const handleLogout = async () => {
    console.log("Logout clicked");
    // Add your logout logic here
  };

  const getHomeLink = () => "/";
  const getCoursesLink = () => "/cours";
  const getTarifsLink = () => "/tarifs";
  const getLoginLink = () => "/auth/login";

  return (
    <Navbar className="sticky top-0 p-4 w-full bg-white text-black z-50" fluid>
      <div className="flex items-center justify-between w-full">
        <Navbar.Brand href={getHomeLink()} className="flex flex-col items-center mr-4">
          <Image src={Logo} width={75} height={75} alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold mt-2">
            Paper's
          </span>
        </Navbar.Brand>
        <div className="hidden md:flex items-center space-x-4">
          <Link href={getHomeLink()} className="text-black hover:underline">
            Accueil
          </Link>
          <Link href={getCoursesLink()} className="text-black hover:underline">
            Découvrez
          </Link>
          <Link href={getTarifsLink()} className="text-black hover:underline">
            Bibliothèque
          </Link>
        </div>
        <Link href={getLoginLink()} className="ml-auto text-c10  underline">
          Se connecter
        </Link>
      </div>
    </Navbar>
  );
}

export default Navbar_;
