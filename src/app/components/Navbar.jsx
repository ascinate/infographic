import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const mainmenu = [
    { id: 1, title: "Illustrations", link: "/illustrations" },
    { id: 2, title: "Animations", link: "/animations" },
    { id: 3, title: "Infographics", link: "/infographics" },
    { id: 4, title: "License", link: "/license" },
  ];
  return (
    <>
      <header className="float-strat w-1000 header-mains">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container ">
            <Link href="/" className="navbar-brand">
              <Image
                src="/mains-logo.svg"
                width={153}
                height={43}
                loading="lazy"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center gap-2 ms-auto w-100">
                {mainmenu.map((page) => (
                  <li className="nav-item" key={page.id}>
                    <Link href={page.link} className="nav-link">
                      {page.title}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
