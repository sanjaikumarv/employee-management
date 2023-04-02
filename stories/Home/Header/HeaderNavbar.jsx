import React from "react";

const NAVBAR = [
  {
    title: "Home",
    url: "",
  },
  {
    title: "About us",
    url: "",
  },
  {
    title: "Testimonial",
    url: "",
  },
  {
    title: "Partner With Us",
    url: "",
  },
  {
    title: "Contact us",
    url: "",
  },
];

export default function HeaderNavbar() {
  return (
    <div className='lg:flex space-x-2 hidden'>
      {NAVBAR.map((links) => {
        return (
          <a
            key={1}
            className='font-medium hover:text-purple-600 text-base py-2 px-4'
            href={links.url}>
            {links.title}
          </a>
        );
      })}
    </div>
  );
}
