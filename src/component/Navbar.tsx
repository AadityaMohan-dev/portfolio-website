import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFilePdf,
} from "react-icons/fa";
import resume from "../assets/resume.pdf";

type NavItem = {
  label: string;
  link: string;
  icon: JSX.Element;
};

const navItems: NavItem[] = [
  { label: "Resume", link: resume, icon: <FaFilePdf /> },
  { label: "GitHub", link: "https://github.com/AadityaMohan-dev", icon: <FaGithub /> },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/aaditya-mohan/", icon: <FaLinkedin /> },
  { label: "Instagram", link: "https://www.instagram.com/aaditya._.mohan", icon: <FaInstagram /> },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");

  const handleClick = (item: NavItem) => {
    setActive(item.label);
    window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="fixed inset-x-0 top-3 sm:top-5 lg:top-7 z-[100] flex justify-center">
      <ul
        className="
          flex items-center
          gap-2 sm:gap-3 lg:gap-4
          p-2 sm:p-3 lg:p-4
          rounded-xl sm:rounded-2xl
          border border-zinc-200
          bg-white
          shadow-lg
        "
      >
        {navItems.map((item) => {
          const isActive = active === item.label;

          return (
            <li key={item.label} className="relative group">
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="
                    absolute inset-0
                    rounded-xl
                    border-2 border-zinc-900
                  "
                />
              )}

              <button
                onClick={() => handleClick(item)}
                aria-label={item.label}
                className="
                  relative z-10
                  flex items-center justify-center
                  h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16
                  rounded-xl
                  text-zinc-700
                  transition-all duration-200
                  hover:bg-zinc-100 hover:text-zinc-900
                "
              >
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl">
                  {item.icon}
                </span>
              </button>

              {/* Tooltip (desktop+) */}
              <span
                className="
                  pointer-events-none
                  absolute -bottom-8 left-1/2 -translate-x-1/2
                  hidden md:block
                  whitespace-nowrap
                  rounded-md
                  bg-zinc-900 px-2 py-1
                  text-xs text-white
                  opacity-0
                  transition
                  group-hover:opacity-100
                "
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
