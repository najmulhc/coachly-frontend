import React from "react";
import { GiTicket } from "react-icons/gi";
import { Link } from "react-router-dom";
import navLogo from "../img/navLogo.png";
import AuthModal from "../Pages/AuthModal";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/" className="hover:text-secondary">
          Home
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-secondary">
          Catagory
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-secondary">
          Collections
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-secondary">
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div className="flex flex-wrap place-items-center  ">
      <section className="  mx-auto">
        <nav className="flex justify-between  bg-base-100 text-accent w-screen">
          <div className="px-5 md:px-12 py-6 flex w-full items-center">
            <Link to="/" className="text-3xl font-bold font-heading">
              <img className="h-9" src={navLogo} alt="logo" />
            </Link>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              {links}
            </ul>
            <div className="flex items-center space-x-5 ml-auto ">
              <Link
                to="/"
                className=" hidden md:inline-block hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              <Link to="/" className="flex items-center hover:text-secondary">
                <GiTicket className="w-6 h-6" />
              </Link>
              <label
                to="/"
                className="flex items-center hover:text-secondary"
                htmlFor="my-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </label>
            </div>
          </div>
          <Link to="/" className="md:hidden flex items-center">
            <div className="dropdown dropdown-left flex  h-full ml-2 ">
              <label
                tabIndex="0"
                className="navbar-burger self-center mr-12 md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {links}
                </ul>
              </label>
            </div>
          </Link>
        </nav>
        <AuthModal />
      </section>
    </div>
  );
};

export default Navbar;
