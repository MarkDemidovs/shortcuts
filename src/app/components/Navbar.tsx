"use client";
import Link from "next/link";
import { title } from "process";
import {useState, useRef} from 'react'

const Links = [
  {
    link: "#aboutPage",
    title: "About",
  },
  {
    link: "#skillsPage",
    title: "Skills",
  },{
    link: "#projectsPage",
    title: "Projects"
  },
  {
    link: "#contactPage",
    title: "Contact"
  }
];

export default function NavBar() {

  return (
    <nav className="w-full h-16 bg-background1 text-offwhite flex items-center px-6 justify-between sticky md:fixed">
      <span className="text-2xl font-bold">{"MARK DEMIDOVS"}</span>
      <div className="flex gap-8 max-md:hidden">
        {Links.map((a, i) => (
          <Link href={a.link} key={i}>
            {a.title}
          </Link>
        ))}
      </div>
      <img src="menu.png" className="h-6 md:hidden pt-1"></img>
    </nav>
  );
}