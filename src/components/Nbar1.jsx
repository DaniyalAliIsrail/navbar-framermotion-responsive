// import "./index.css"; // Import the Tailwind CSS file
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Nbar1 = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    // Function to handle menu toggle
    const toggleMobileMenu = () => {
     setIsMobile((prev) => !prev);
   };
 
   // Variants for link animations (desktop and mobile)
   const linkVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { type: "spring", stiffness: 200, damping: 20 },
     },
   };
 
   // Mobile menu animation
   const mobileMenuVariants = {
     hidden: { x: "-100vw" },
     visible: {
       x: 0,
       transition: {
         type: "spring",
         stiffness: 100,
         damping: 20,
         duration: 0.5,
       },
     },
   };
 
   // Icon animation: rotate, scale, and fade in/out
   const iconVariants = {
     hidden: { rotate: 0, scale: 1, opacity: 1 },
     visible: {
       rotate: 90,
       scale: 1.2,
       opacity: 1,
       transition: { duration: 0.5, ease: "easeInOut" },
     },
     exit: {
       rotate: 0,
       scale: 1,
       opacity: 0,
       transition: { duration: 0.4, ease: "easeInOut" },
     },
   };
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 md:flex md:justify-center">
      {/* Desktop links */}
      <div className="hidden md:flex ">
        {" "}
        {/* Show on medium and larger screens */}
        <motion.ul className="flex" initial="hidden" animate="visible">
          <motion.li
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            className="text-white mx-4"
          >
            <a href="/">Home</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            className="text-white mx-4"
          >
            <a href="/about">About</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            className="text-white mx-4"
          >
            <a href="/services">Services</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            className="text-white mx-4"
          >
            <a href="/contact">Contact</a>
          </motion.li>
        </motion.ul>
      </div>

      <h3 className="text-white text-2xl md:hidden">MyLogo</h3>
      <div>
        {/* Animated Hamburger/Close Button with third-party icons */}
        <motion.button
          className="text-white text-2xl mobile-menu-icon md:hidden" // Show only on mobile
          onClick={toggleMobileMenu} // Using the toggle function
        >
          {/* Icon Animation */}

          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={isMobile ? "visible" : "hidden"}
            exit="exit"
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile menu with sliding animation */}
      {isMobile && (
        <motion.ul
          className="mt-16 flex flex-col items-center bg-gray-800 w-full h-full fixed top-0 left-0 md:hidden" // Only show on mobile
          initial="hidden"
          animate="visible"
          variants={mobileMenuVariants}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-white text-[30px] my-4 "
          >
            <a href="/">Home</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-white text-[30px]  my-4"
          >
            <a href="/about">About</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-white text-[30px]  my-4"
          >
            <a href="/services">Services</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-white text-[30px]  my-4"
          >
            <a href="/contact">Contact</a>
          </motion.li>
        </motion.ul>
      )}
    </nav>
  )
}

export default Nbar1