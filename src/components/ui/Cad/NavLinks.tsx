"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  item: {
    title: string;
    path: string;
    Image: string;
  };

  onClick: () => void;
}

const NavLinks = ({ item, onClick }: Props) => {
    const [showIcon, setShowIcon] = useState(false)

    const handleMouseEnter = () => {
        setShowIcon(true)
    }
    const handleMouseLeave = () => {
        setShowIcon(false)
    }

    const handleClick = () => {
        onClick()
    }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link
          href={item.path}
          className="py-4 border-b flex justify-between items-center cursor-pointer border-b-gray-250 text-xl sm:text-2xl md:text-3xl"

          onClick={handleClick}
        >
          {item.title}
          {item.Image && showIcon && (
            <Image
              src={item.Image}
              alt="navlinks hover icon"
              className="w-[25px] sm:w-[30px]"
              width={30}
              height={30}
            />
          )}
        </Link>
    </li>
  );
};

export default NavLinks;
