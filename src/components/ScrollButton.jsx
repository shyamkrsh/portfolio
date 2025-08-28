import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);

      // Check top/bottom
      setIsAtTop(currentScrollY <= 50);
      setIsAtBottom(
        window.innerHeight + currentScrollY >=
          document.body.scrollHeight - 50
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Decide icon & action
  let icon, action;
  if (isAtBottom) {
    icon = <FaArrowUp size={20} />;
    action = scrollToTop;
  } else if (isAtTop) {
    icon = <FaArrowDown size={20} />;
    action = scrollToBottom;
  } else {
    if (scrollDirection === "down") {
      icon = <FaArrowDown size={20} />;
      action = scrollToBottom;
    } else {
      icon = <FaArrowUp size={20} />;
      action = scrollToTop;
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={action}
      className="fixed bottom-6 right-6 cursor-pointer bg-[#30a5f2] text-white p-3 rounded-full shadow-lg  transition z-50"
    >
      {icon}
    </motion.button>
  );
};

export default ScrollButton;
