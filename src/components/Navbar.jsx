import { LuMoonStar, LuSun } from "react-icons/lu";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Achievements",
    "Testimonials",
    "Contact",
  ];

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu after click
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full h-16 fixed top-0 left-0 z-50 backdrop-blur-md shadow-md flex items-center justify-between px-6
        ${theme === "dark" 
          ? "bg-gray-900/80 shadow-gray-800" 
          : "bg-white/80 shadow-gray-200"}`}
    >
      {/* Brand Logo */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        onClick={() => handleScroll("home")}
        className="font-playfair text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text cursor-pointer"
      >
        Shyam
      </motion.h1>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <motion.div
          whileTap={{ rotate: 90, scale: 0.9 }}
          className="flex relative items-center justify-center cursor-pointer mr-4"
        >
          <LuMoonStar
            className={`absolute transition-all duration-500 ease-in-out text-2xl transform ${
              theme === "dark"
                ? "opacity-100 scale-100 rotate-0 text-yellow-400"
                : "opacity-0 scale-0 -rotate-180"
            }`}
            onClick={() => dispatch(toggleTheme())}
          />
          <LuSun
            className={`absolute transition-all duration-500 ease-in-out text-2xl transform ${
              theme === "light"
                ? "opacity-100 scale-100 rotate-0 text-orange-500"
                : "opacity-0 scale-0 rotate-180"
            }`}
            onClick={() => dispatch(toggleTheme())}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="hidden md:flex ml-auto gap-8"
        >
          {navLinks.slice(0, 5).map((item, idx) => (
            <motion.li
              key={idx}
              onClick={() => handleScroll(item)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer font-medium text-base relative group 
                ${theme === "dark" ? "text-gray-200" : "text-slate-700"}`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <motion.div whileTap={{ scale: 0.9 }} className="md:hidden relative z-50">
          {menuOpen ? (
            <RiCloseLine
              onClick={() => setMenuOpen(false)}
              className={`text-3xl cursor-pointer transition-colors ${
                theme === "dark" ? "text-gray-200" : "text-slate-700"
              }`}
            />
          ) : (
            <RiMenu3Fill
              onClick={() => setMenuOpen(true)}
              className={`text-3xl cursor-pointer transition-colors ${
                theme === "dark" ? "text-gray-200" : "text-slate-700"
              }`}
            />
          )}
        </motion.div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed top-0 right-0 w-full h-screen flex flex-col items-center justify-center gap-10 text-2xl z-40 
              ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-slate-800"}`}
          >
            {navLinks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleScroll(item)}
                className="cursor-pointer font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


