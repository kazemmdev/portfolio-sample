import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import USER from "../../mock/about.json";
import { MenuToggle } from "./Memu";
import { useRef } from "react";
import { useDimensions } from "../../utils/useDimention";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(0px at 100% 40px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Header() {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <nav className="w-full max-w-5xl mx-auto">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.6,
          duration: 0.8,
        }}
        className="w-full flex items-center justify-between p-6 h-20 gap-2"
      >
        <div className="font-logo text-black text-2xl">
          <NavLink to="/">{USER.name}</NavLink>
        </div>
        <div className="items-center justify-between gap-5 hidden sm:flex">
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

        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="sm:hidden"
        >
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white backdrop-blur z-20 overflow-hidden"
            variants={sidebar}
          >
            <div className="flex items-center justify-around flex-col gap-4">
              <NavLink
                onClick={() => toggleOpen()}
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black text-xl" : "text-gray-600 text-xl"
                }
              >
                About
              </NavLink>
              <NavLink
                onClick={() => toggleOpen()}
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-black text-xl" : "text-gray-600 text-xl"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => toggleOpen()}
                className={({ isActive }) =>
                  isActive ? "text-black text-xl" : "text-gray-600 text-xl"
                }
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </motion.nav>
    </nav>
  );
}

export default Header;
