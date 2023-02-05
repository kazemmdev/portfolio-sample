import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import USER from "../../mock/about.json";

function Header() {
  return (
    <nav className="w-full max-w-5xl mx-auto">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.8,
          duration: 1,
        }}
        className="w-full flex items-center justify-between p-6 h-20 gap-2"
      >
        <div className="font-logo text-black text-2xl">
          <NavLink to="/">{USER.name}</NavLink>
        </div>
        <div className="flex items-center justify-between gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black text-xl" : "text-gray-600 text-xl"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-black text-xl" : "text-gray-600 text-xl"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-black text-xl" : "text-gray-600 text-xl"
            }
          >
            Contact
          </NavLink>
        </div>
      </motion.nav>
    </nav>
  );
}

export default Header;
