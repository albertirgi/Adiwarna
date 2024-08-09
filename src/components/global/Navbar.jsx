import { Link } from "react-router-dom";
import { useState } from "react";
import LogoAdiwarnaKelana from "../../assets/images/logo-adiwarna-kelana.svg";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav
        id="navbar"
        className="bg-custom-gray fixed top-0 z-30 w-full opacity-0 transition-opacity duration-1000"
      >
        <div className="px-16">
          <div className="relative">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-8 w-auto hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out"
                    src={LogoAdiwarnaKelana}
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-16">
                  <a
                    id="home"
                    className="rounded-md p-1 text-base font-bold text-white hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out"
                    aria-current="page"
                  >
                    <Link to="/">HOME</Link>
                  </a>
                  <a
                    id="curated-works"
                    href="/category"
                    className="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out"
                  >
                    <Link to="/category">CURATED WORKS</Link>
                  </a>
                  <a
                    href="#"
                    className="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out"
                  >
                    VOTE
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out"
                  aria-controls="menu-dropdown"
                  aria-expanded="false"
                  onClick={toggleSidebar}
                >
                  <svg
                    className="block h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className="hidden h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar menu */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleSidebar}>
          <div className="fixed top-0 right-0 w-80 h-full bg-black shadow-lg pt-4 pl-12 z-30 flex flex-col justify-between">
            <div className="flex flex-col space-y-14">
              <svg
                className="h-10 w-10 text-gray-300 hover:text-white self-end mr-12 hover:cursor-pointer transition-transform duration-300 hover:scale-110 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                onClick={toggleSidebar}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <Link
                to="/"
                className="text-xl font-light text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110 ease-in-out"
                onClick={toggleSidebar}
              >
                About
              </Link>
              <Link
                to="/merch"
                className="text-xl font-light text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110 ease-in-out"
                onClick={toggleSidebar}
              >
                Merch
              </Link>
              <a
                href="#"
                className="text-xl font-light text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110 ease-in-out"
                onClick={toggleSidebar}
              >
                Upcoming Events
              </a>
              <a
                href="#"
                className="text-xl font-light text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110 ease-in-out"
                onClick={toggleSidebar}
              >
                Currated Works
              </a>
            </div>
            <div className="mb-10">
            <div className="border-t border-white mr-12 justify-center mb-6"></div>
            <img className="w-24" src={LogoAdiwarnaKelana} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
