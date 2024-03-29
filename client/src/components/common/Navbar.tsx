// import { Socials } from "../../constants";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NAV_LINKS = [
  { text: "home", link: "/" },
  { text: "projects", link: "/projects" },
  { text: "skills", link: "/skills" },
  { text: "experience", link: "/experience" },
  { text: "about", link: "/about" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <nav className="w-full fixed top-0 border-b border-[#79797956] bg-[#000000] backdrop-blur-md z-50 px-5 md:px-0 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto md:px-20">
          {/* logo side */}
          <NavLink to="/" className="flex items-center">
            <Logo />
          </NavLink>

          {/* Action buttons */}
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/contact"
              className="text-gray-800 bg-[#6b72808c] dark:text-white hover:bg-purple-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Let's Talk
            </NavLink>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* nav links */}
          <div
            className={`${
              isOpen ? "" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {NAV_LINKS.map(({ text, link }) => (
                <li key={text} onClick={() => setOpen(false)}>
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      isActive
                        ? "capitalize block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        : "capitalize block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
// <div className="w-full h-[75px] fixed top-0 border-b border-[#79797956] bg-[#000000] backdrop-blur-md z-50 px-20">
//   <div className="w-full h-full flex flex-row items-center justify-between">
//     <div className="h-auto w-auto flex flex-row items-center justify-center gap-1">
//       <div>
//         <img
//           src="../../../public/images/logo.png"
//           alt="logo"
//           width={50}
//           height={50}
//           className="cursor-pointer hover:animate-slowspin rounded-full"
//         />
//       </div>

//       <div className="font-bold hidden md:block text-gray-300">Abbas</div>
//     </div>

//     <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between">
//       <div className="flex items-center justify-between w-full h-auto  mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//         <a href="#about-me" className="cursor-pointer">
//           About me
//         </a>
//         <a href="#skills" className="cursor-pointer">
//           Skills
//         </a>
//         <a href="#projects" className="cursor-pointer">
//           Projects
//         </a>
//       </div>
//     </div>

//     <div className="px-6 py-3 text-l font-semibold bg-[#6b72808c] text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-3">
//       Let's Talk
//     </div>

//     {/* <div className="flex flex-row gap-5">
//       {Socials.map((social) => (
//         <img
//           src={`../../../public/images${social.src}`}
//           alt={social.name}
//           key={social.name}
//           width={24}
//           height={24}
//         />
//       ))}
//     </div> */}
//   </div>
// </div>
