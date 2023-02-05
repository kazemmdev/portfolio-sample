import { motion } from "framer-motion";
import USER from "../../mock/about.json";

function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto">
      <motion.nav
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.6,
          duration: 0.8,
        }}
        className="w-full flex items-center justify-center py-6 h-20 text-slate-400"
      >
        © {USER.name}
      </motion.nav>
    </footer>
  );
}

export default Footer;
