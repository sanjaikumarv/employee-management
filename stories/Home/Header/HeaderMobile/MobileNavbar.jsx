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

export default function MobileNavbar() {
  return (
    <div className='space-y-5'>
      {NAVBAR.map((links) => {
        return (
          <div key={1}>
            <a className='hover:text-purple-600' href={links.url}>
              {links.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}
