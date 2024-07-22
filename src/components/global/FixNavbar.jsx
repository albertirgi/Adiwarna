import { Link } from "react-router-dom";
import LogoAdiwarnaKelana from "../../assets/images/logo-adiwarna-kelana.svg";

const FixNavbar = () => {
  return (
    <div>
      <nav id="fix-navbar" className="bg-custom-gray fixed top-0 z-30 w-full">
        <div className="px-16">
          <div className="relative">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img className="h-8 w-auto hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out" src={LogoAdiwarnaKelana} alt="Your Company" />
                </Link>
              </div>
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-16">
                  <a id="home" className="rounded-md p-1 text-base font-bold text-white hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out" aria-current="page">
                    <Link to="/">HOME</Link>
                  </a>
                  <a id="curated-works" href="/category" className="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out">
                    <Link to="/category">CURATED WORKS</Link>
                  </a>
                  <a id="vote" href="#" className="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out">
                    VOTE
                  </a>
                  <a id="winner" href="#" className="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out">
                    WINNER
                  </a>
                </div>
              </div>
              <div>
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out" aria-controls="menu-dropdown" aria-expanded="false">
                  <svg className="block h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg className="hidden h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FixNavbar;
