import { useState } from "react";
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
  {
    label: "Resume",
    link: resume,
    icon: <FaFilePdf size={30} />,
  },
  {
    label: "GitHub",
    link: "https://github.com/AadityaMohan-dev?tab=repositories",
    icon: <FaGithub size={30} />,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/aaditya-mohan/",
    icon: <FaLinkedin size={30} />,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/aaditya._.mohan",
    icon: <FaInstagram size={30} />,
  },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");

  const handleClick = (item: NavItem) => {
    setActive(item.label);
    window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <ul className="flex gap-2 rounded-2xl border border-zinc-200 bg-white/70 p-2 backdrop-blur-md shadow-lg">
        {navItems.map((item) => {
          const isActive = active === item.label;

          return (
            <li key={item.label} className="relative group">
              {/* Active animated pill */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-xl border-2 border-zinc-900 pointer-events-none"
                />
              )}

              {/* Icon Button */}
              <button
                onClick={() => handleClick(item)}
                className="relative z-10 flex  items-center justify-center rounded-xl text-zinc-700 transition-all duration-200 hover:bg-white hover:text-zinc-900 focus:outline-none"
                aria-label={item.label}
              >
                {item.icon}
              </button>

              {/* Tooltip */}
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 scale-90 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
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
